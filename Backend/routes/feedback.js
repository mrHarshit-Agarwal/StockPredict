var express = require("express");

var router = express.Router();

var Feedback = require("../model/feedback");


router.post("/feedback", async (req, res) => {
  var feedback = new Feedback({
    name: req.body.name,
    desc: req.body.desc,
    
  });


  feedback.save(function (err) {
    if (err) {
        return next(err);
    }
    res.send('Feedback sent');
});
});
module.exports = router;
