const Fish = require('../models/fish')
const User = require('../models/user')

module.exports = {
    index,
    new:newFish,
    create,
}

function index(req,res){
    Fish.find({})
    .then((fish)=>{
        console.log('fish', fish)
        res.render('fish/index', {title: 'Fish Store', user: req.user, fish: fish})
    })
}

function newFish(req, res){
    res.render('fish/new', {title: 'Add Fish to Fish Store', user: req.user})
}

function create(req, res){
    req.body.agresive = false;
    Fish.create(req.body)
    .then(()=>{
        res.redirect('/fish/new')
    })
    .catch((error)=>{
        console.log(error)
    })
}
