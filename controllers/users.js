const User = require('../models/user')

module.exports = {
    profile,
    index, 
    addIntro,
    currentTank
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

function addIntro(req, res){
    User.findByIdAndUpdate(req.user._id, req.body, {new: true})
    .then(()=>{
        res.redirect('/users/profile')
    })
}

function currentTank(req, res){
    User.findById(req.user._id)
    .populate('fishCollection')
    .then((user)=>{
        res.render('users/fishcollection', {title: 'Current Tank', user: req.user})
    })
}
