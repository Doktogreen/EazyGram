const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');
const passwordGenerator = require('password-generator');

// Define API endpoints
module.exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      Login(existingUser);
    }

    // Generate phone number
    const phone = generatePhoneNumber(email);

    // Generate debit card details
    const debitCard = generateDebitCard();

    // Generate full name
    const fullName = generateFullName(email);

    // Create new wallet
    const wallet = await createWallet();

     // Generate random password
     const password = passwordGenerator(12, false);

     // Hash password
     const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      email: email,
      password: hashedPassword,
      phone: phone,
      debitCard: debitCard,
      fullName: fullName,
      wallet: wallet,
    });

    // Save user to database
    await user.save();

    res.status(201).send('User created');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
    next(error)
  }
};
const Login = async (_email) => {
  try {
    const email = email;

    // Check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
        // return res.json({ msg: "Incorrect Username or Password", status: false });
      return res.status(401).send('Invalid email or password');
    }
    
    // Check password
    const passwordMatch = await bcrypt.compare(user.password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Invalid email or password');
    }
    
    // Generate JWT
    const token = jwt.sign({ userId: user._id }, 'mysecret');
    
    res.status(200).json({ token: token });
    
} catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
};

// Helper functions
function generatePhoneNumber(email) {
// Generate phone number based on email address
// ...
    let phoneNumber;
    return phoneNumber;
}

function generateDebitCard() {
// Generate debit card details
// ...
    let debitCardDetails;
    return debitCardDetails;
}

function generateFullName(email) {
// Generate full name based on email address
// ...
    let fullName;
    return fullName;
}

async function createWallet() {
// Create new wallet that contains all crypto and fiat currencies in the world
// ...
    let wallet;
    return wallet;
}
