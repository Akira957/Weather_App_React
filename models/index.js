const Sequelize = require("sequelize");

const sequelize = require("../db/config.js");

// Creates a "Chirp" model that matches up with DB
const Weather = sequelize.define("weather", {
    author: Sequelize.STRING,
    body: Sequelize.STRING,
    created_at: Sequelize.DATE
});

// Syncs with DB
Weather.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Weather;