var express = require("express");
var passport = require("passport");
var bcrypt = require("bcrypt");
const jsonwt = require("jsonwebtoken");

var router = express.Router();

var User = require("../model/usermodel");
var key = require("../mysetup/myurl");
const saltRounds = 10;

router.post("/signup", async (req, res) => {
  var newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  await User.findOne({ name: newUser.name })
    .then(async profile => {
      if (!profile) {
        bcrypt.hash(newUser.password, saltRounds, async (err, hash) => {
          if (err) {
            console.log("Error is", err.message);
          } else {
            newUser.password = hash;
            await newUser
              .save()
              .then(() => {
                res.json({
                  status:200
                });
              })
              .catch(err => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {

        res.json({
          staus:404,
          message:"User already exists..."
        });
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
});

router.post("/login", async (req, res) => {
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  await User.findOne({ email: newUser.email })
    .then(profile => {
      if (!profile) {
        res.send("User not exist");
      } else {
        bcrypt.compare(
          newUser.password,
          profile.password,
          async (err, result) => {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              //   res.send("User authenticated");
              const payload = {
                id: profile.id,
                email: profile.email
              };
              jsonwt.sign(
                payload,
                key.secret,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) {
                    console.log("Error is ", err.message);
                  }
                  res.json({
                    status: 200,
                    message: "Bearer " + token
                  });
                }
              );
            } else {
              res.json({
                status: false
              });
            }
          }
        );
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email
    });
  }
);

module.exports = router;
