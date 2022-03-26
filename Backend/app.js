require('dotenv').config();
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var User = require("./model/usermodel");
var db = process.env.MONGO_URL
var app = express();
var passport = require("passport");

var port = process.env.PORT || 3000;

var bcrypt = require('bcrypt')
var saltRouds = 10

const connectDB = require('./database/connection')
connectDB();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


// mongoose
//   .connect(db)
//   .then(() => {
//     console.log("Database is connected");
//   })
//   .catch(err => {
//     console.log("Error is ", err.message);
//   });

// app.get("/", (req, res) => {
//   res.status(200).send(`Hi Welcome to the Login and Signup API`);
// });

// app.post("/login", async (req, res) => {
//     var newUser = {};
//     newUser.name = req.body.name;
//     newUser.password = req.body.password;
  
//     await User.findOne({ name: newUser.name })
//       .then(profile => {
//         if (!profile) {
//           res.send("User not exist");
//         } else {
//           bcrypt.compare(
//             newUser.password,
//             profile.password,
//             async (err, result) => {
//               if (err) {
//                 console.log("Error is", err.message);
//               } else if (result == true) {
//                 res.send("User authenticated");
//               } else {
//                 res.send("User Unauthorized Access");
//               }
//             }
//           );
//         }
//       })
//       .catch(err => {
//         console.log("Error is ", err.message);
//       });
//   });


//   app.post("/signup", async (req, res) => {
//     var newUser = new User({
//       name: req.body.name,
//       password: req.body.password
//     });
  
//     await User.findOne({ name: newUser.name })
//       .then(async profile => {
//         if (!profile) {
//           bcrypt.hash(newUser.password, saltRounds, async (err, hash) => {
//             if (err) {
//               console.log("Error is", err.message);
//             } else {
//               newUser.password = hash;
//               await newUser
//                 .save()
//                 .then(() => {
//                   res.status(200).send(newUser);
//                 })
//                 .catch(err => {
//                   console.log("Error is ", err.message);
//                 });
//             }
//           });
//         } else {
//           res.send("User already exists...");
//         }
//       })
//       .catch(err => {
//         console.log("Error is", err.message);
//       });
//   });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });


app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategy")(passport);

app.get("/", (req, res) => {
  res.status(200).send(`Hi Welcome to the Login and Signup API`);
});

const profile = require("./routes/User");
app.use("/api", profile);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});