const Message = require('../models/message')

module.exports = {
    index, 
}

function index(req, res){
    Message.find({})
    .populate('postedBy')
    .then((messages)=>{
        res.render('messages/index', {user: req.user, title: 'Forum', messages: messages.reverse()})
    })
    .catch((err)=>{
        console.log(err)
    })
}