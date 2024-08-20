const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

const data={
    "name": "Gowtham P",
    "roll_number" : "22BAD031",
    "date_of_birth": "January 2005",
    "Favourite_sport": "Badmiton"
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("data.ejs",{
    data:data 
  });
});

app.listen(port, () => {
  console.log("server is started...");
});