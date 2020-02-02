// Dependencies
// Require core node module "path" to display HTML
const path = require("path");

// Routes to be exported
module.exports = (app) =>
{
    // When the user is on the home page, send them the index.html
    app.get("/", (req, res) =>
    {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // When the user is on the exercise page, send them the exercise.html
    app.get("/exercise", (req, res) =>
    {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // When the user is on the stats page, send them the stats.html
    app.get("/stat", (req, res) =>
    {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}