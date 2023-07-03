const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    var today = new Date();
    var currentDay = today.getDate();
    var day = "";

    switch (currentDay) {
        case 6:
            day = "Saturday";
            break;
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wenesday";
            break;
        case 4:
            day = "Tuesday";
            break;
        case 5:
            day = "Friday";
            break;
        default:
            console.log("Current day is equal to" + currentDay);
            break;
        
    }

    res.render("list", { kindOfDay: day});

});

app.listen(3000, (req, res) => {
    console.log("Server is running on port: 3000");
});