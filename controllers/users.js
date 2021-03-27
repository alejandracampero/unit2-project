const User = require('../models/user')

module.exports = {
    profile
}

function profile(req, res){
    User.findById(req.user._id)
    .populate("fishCollection")
    .then((user)=>{
        res.render('users/profile', {title: 'My Profile', user: user})
    })
    .catch((err)=>{
        res.redirect('/')
    })
}