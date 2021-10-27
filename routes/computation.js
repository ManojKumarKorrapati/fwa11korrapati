var express = require('express');
var router = express.Router();
var value = 0;
var key = 0;


/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.query !== {}) {
        if (req.query.value) {
            value = req.query.value;
            key = Math.sign(value);
        } else {
            value = Math.floor(Math.random() * 4);
            key = Math.sign(value);
        }
    }
    res.send(`Math.sign() applied to ${value} is ${key}`);

});


module.exports = router;
