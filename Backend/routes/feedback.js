var express = require("express");

var router = express.Router();

var Feedback = require("../model/feedback");


router.post("/feedback", async (req, res) => {
  var feedback = new Feedback({
    name: req.body.name,
    desc: req.body.desc,
    
  });


  feedback.save()
          .then(() => {
            res.json({
              staus:200,
              message:"Your feedback successfully saved."
            });
        })
        .catch(err => {
          res.json({
            staus:406,
            message:"Feedback not saved."
        });
          console.log("Error is ", err.message);
        });
        
})
module.exports = router;
