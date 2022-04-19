var express = require("express");

var router = express.Router();

var Profile = require("../model/usermodel");

router.post("/updateprofile/:id", async (req, res) => {
Profile.findByIdAndUpdate(req.params.id, {$set: {
  name: req.body.name,
  email:req.body.email

  
}})



          .then(() => {
            res.json({
              staus:200,
              message:"Profie Updated successfully."
            });
        })
        .catch(err => {
            res.json({
                staus:406,
                message:"Profie Updated not successfully."
            });
          console.log("Error is ", err.message);
        });
        
      });
module.exports = router;
