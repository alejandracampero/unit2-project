const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  postedBy:[{type: Schema.Types.ObjectId, ref: 'User'}],
  title:String,
  //replies:[replySchema]
}, {
  timestamps:true
})

module.exports = mongoose.model("Message", messageSchema)

