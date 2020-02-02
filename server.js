// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Initialize express app
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Initialize logger
app.use(logger("dev"));

// Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
    useNewUrlParser: true
});


// Routes
require("./routes/htmlRoutes");
require("./routes/apiRoutes");

// PORT
const PORT = process.env.PORT || 3000;

// Start app
app.listen(PORT, () =>
{
    console.log("App running on localhost:" + PORT);
})