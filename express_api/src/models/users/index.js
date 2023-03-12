const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  debitCard: {
    number: { type: String, required: true },
    cvv: { type: String, required: true },
    expirationDate: { type: String, required: true },
  },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  wallet: {
    crypto: {
      bitcoin: { type: Number, required: true },
      ethereum: { type: Number, required: true },
      ripple: { type: Number, required: true },
      // Add more crypto currencies here
    },
    fiat: {
      usd: { type: Number, required: true },
      eur: { type: Number, required: true },
      gbp: { type: Number, required: true },
      // Add more fiat currencies here
    },
  },
});

// Hash and salt the password before saving it to the database
userSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
  
      this.password = hashedPassword;
  
      next();
    } catch (error) {
      next(error);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
