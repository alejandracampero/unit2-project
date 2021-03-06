const router = require('express').Router()
const usersCtrl = require('../controllers/users')

router.get('/profile', isLoggedIn, usersCtrl.profile)
router.get('/index', isLoggedIn, usersCtrl.index)
router.put('/profile', isLoggedIn, usersCtrl.addIntro)
router.get('/profile/fishcollection', isLoggedIn, usersCtrl.currentTank)
router.post('/profile/fishcollection', isLoggedIn, usersCtrl.buyFish)
router.get('/profile/fishcollection/:id', isLoggedIn, usersCtrl.fishDetail)
router.get('/profile/fishcollection/:id/edit', isLoggedIn, usersCtrl.show)
router.put('/profile/fishcollection/:id/', isLoggedIn, usersCtrl.update)
router.get('/:id/', isLoggedIn, usersCtrl.otherUsersTanks)
router.delete('/profile/fishcollection', isLoggedIn, usersCtrl.delete)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}



module.exports = router