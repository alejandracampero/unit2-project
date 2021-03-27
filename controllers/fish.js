const Fish = require('../models/fish')

module.exports = {
    index,
}

function index(req,res){
    Fish.find({})
    .then((fish)=>{
        res.render('fish/index', {title: 'Fish Store', user: req.user, fish: fish})
    })
  }
