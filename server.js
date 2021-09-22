const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;


app.listen(PORT, (err) => {
    if (err) { console.log(err); };
    console.log('Listening on port ' + PORT);
});