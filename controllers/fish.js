const Fish = require('../models/fish')

module.exports = {
    index,
    new:newFish,
}

function index(req,res){
    Fish.find({})
    .then((fish)=>{
        res.render('fish/index', {title: 'Fish Store', user: req.user, fish: fish})
    })
}

function newFish(req, res){
    res.render('fish/new', {title: 'Add Fish to Fish Store', user: req.user})
}
