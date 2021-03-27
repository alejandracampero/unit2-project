var express = require('express');
var router = express.Router();
const fishCtrl = require('../controllers/fish')

router.get('/', isLoggedIn, fishCtrl.index)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router