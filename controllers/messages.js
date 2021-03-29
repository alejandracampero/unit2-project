const Message = require('../models/message')

module.exports = {
    index, 
    create,
    show
    
}

function index(req, res){
    Message.find({})
    .then((messages)=>{
        res.render('messages/index', {user: req.user, title: 'Forum', messages: messages.reverse()})
    })
    .catch((err)=>{
        console.log(err)
    })
}

function create(req, res) {
    req.body.postedBy = req.user.name
    req.body.avatar = req.user.avatar
    Message.create(req.body)
    .then(()=> {
      res.redirect("/messages")
    })
}

function show(req, res) {
    Message.findById(req.params.id)
    .then((message) => {
      res.render("messages/show", {
        title: "Message Details",
        user: req.user,
        message
      })
    })
  }
