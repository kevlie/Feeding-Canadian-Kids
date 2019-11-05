var express = require('express');
var router = express.Router();

/* GET test Page */
router.get('/', function (req, res, next) {
    res.send('API is working properly. React is connecting to Express properly.');
});

module.exports = router;