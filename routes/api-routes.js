const fetch = require('node-fetch');
const generateWebAppURL = require('../models/utils').generateWebAppURL;

module.exports = (app) => {

    app.post("./search-location-weather", (req, res) => {
        const requestBody = req.body;
        const apiUrl = generateWebAppUrl(requestBody.locationType, requestBody.locationData);

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
            })
            .catch(err => {
                res.redirect("/error");
            });
    });
}