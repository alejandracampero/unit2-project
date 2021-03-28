const router = require('express').Router()
const usersCtrl = require('../controllers/users')

router.get('/profile', isLoggedIn, usersCtrl.profile)
router.get('/index', isLoggedIn, usersCtrl.index)
router.put('/profile', isLoggedIn, usersCtrl.addIntro)
router.get('/profile/fishcollection', isLoggedIn, usersCtrl.currentTank)
router.post('/profile/fishcollection', isLoggedIn, usersCtrl.buyFish)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}



module.exports = router