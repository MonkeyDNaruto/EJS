const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, (req, res) => {
    console.log("Server is running on port: 3000");
});