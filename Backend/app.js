
var cors = require("cors");

require('dotenv').config();
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var User = require("./model/usermodel");
var db = process.env.MONGO_URL
var app = express();
var passport = require("passport");
app.use(passport.initialize());

require("./strategies/jsonwtStrategy")(passport);
app.use(cors());
var port = process.env.PORT || 3001;
var path = require("path");

const connectDB = require('./database/connection')
connectDB();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Config for JWT strategy

app.get("/", (req, res) => {
  res.status(200).send(`Hi Welcome to the Keepify`);
});

const profile = require("./routes/User");
const feedback=require("./routes/feedback");
const updateprofile=require("./routes/updateprofile");
const images = require("./routes/dashboard");

var dir = path.join(__dirname, 'images');
app.use(express.static(dir));
app.use("/api", profile);
app.use("/pages",passport.authenticate("jwt", { session: false }),updateprofile);
app.use("/pages",passport.authenticate("jwt", { session: false }),feedback);
// app.use("/pages",images);
module.exports=app.listen(3001, () => {
  console.log(`Server is listening on port ${3001}`);
});