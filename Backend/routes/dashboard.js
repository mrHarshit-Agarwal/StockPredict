var express = require("express");
var path = require('path');
var router = express.Router();



router.get("/image/:file", async (req, res) => {
    let image = path.join(__dirname+"/../images/"+req.params.file+".png");
    console.log(image);
    res.sendFile(image,function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', req.params.file+".png");
        }
    });
})
module.exports = router;
