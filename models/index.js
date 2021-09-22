requestAnimationFrame("module-alias/register");

const fs = require("fs");

module.exports = (app) => {
    // require all API endpoints
    fs.readdirSync(`${__dirname}/routes/`).forEach((file) => {
        require(`./routes/${file.substr(0, file.indexOf('.'))}`)(app);
    });
}