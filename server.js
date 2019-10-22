const express = require("express");
const path = require("path");


require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.listen(PORT, (err) => {
    if (err) { console.log(err); };
    console.log('Listening on port ' + PORT);
});