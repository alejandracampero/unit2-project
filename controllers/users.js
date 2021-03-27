const User = require('../models/user')

module.exports = {
    profile,
    index
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

function index(req, res){
    User.find({})
    .then((users)=>{
        res.render('users/index', {title: 'All Users', users: users, user: req.user})
    })
} 
