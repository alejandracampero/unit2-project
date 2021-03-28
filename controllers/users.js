const User = require('../models/user')
const Fish= require('../models/fish')

module.exports = {
    profile,
    index, 
    addIntro,
    currentTank,
    buyFish,
    fishDetail,
    otherUsersTanks
}

function profile(req, res){
    User.findById(req.user._id)
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
    .populate("fishcollection")
    .then((user)=>{
        res.render('users/fishcollection', {title: 'Current Tank', user})
    })
    .catch((err)=>{
        console.log(err)
    })
}


function buyFish(req, res){
    User.findById(req.user._id, function(error, user){
        console.log("this is my fish collection: " + user.fishcollection)
        console.log("this req.body.fishcollection: " + req.body.fishcollection) 
        user.fishcollection.push(req.body.fishcollection)
        user.save(function(){res.redirect('/users/profile/fishcollection')})
    })
}

function fishDetail(req, res){
    Fish.findById(req.params.id)
    .then((fish)=>{
        res.render('users/fishdetail', {title: `${fish.species}'s Details Page`, fish, user: req.user})
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  function otherUsersTanks(req, res){
    User.findById(req.params.id)
    .populate('fishcollection')
    .then((user)=>{
        res.render('users/otherusercollection', {title: `${user.name}'s Fish Tank`, user, currentUser: req.user})
    })
    .catch((err)=>{
     console.log(err)
    })
}

