var express = require("express");

var router = express.Router();

var feedback = require("../model/feedback");


router.post("/feedback", async (req, res) => {
  var newUser = new User({
    name: req.body.name,
    desc: req.body.desc,
    
  });
});

  student.save(function (err) {
    if (err) {
        return next(err);
    }
    res.send('student Created successfully');
});
module.exports = router;
