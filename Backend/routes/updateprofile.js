var express = require("express");
var router = express.Router();
var passport = require("passport");
var Profile = require("../model/usermodel");


router.post("/updateprofile",async (req, res) => {
  
Profile.findByIdAndUpdate(req.user.id, {$set: {
  name: req.body.name,
  email:req.body.email
}})
          .then(() => {
            res.json({
              staus:200,
              message:"Profile Updated successfully."
            });
        })
        .catch(err => {
            res.json({
                staus:406,
                message:"Profile Updated not successfully."
            });
          console.log("Error is ", err.message);
        });
        
      });
module.exports = router;
