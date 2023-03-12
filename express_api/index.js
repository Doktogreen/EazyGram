

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const login = require("./src/routes/auth");
// const messages = require("./routes/messages");
const app = express();
// const socket = require("socket.io");
require("dotenv").config();

const port = process.env.PORT;
const db_url = process.env.MONGO_DB_URL;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to MongoDB');
    }
);

app.use("/api/auth", login);
// app.use("/api/messages", messageRoutes);
// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});