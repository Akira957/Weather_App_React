const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});