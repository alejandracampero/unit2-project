const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema ({
    owner: String,
})

const fishSchema = new Schema({
  species: {type: String},
  imageUrl: {type: String},
  description: {type: String},
  care:{type: String},
  tankSize:{type: String},
  agresive: Boolean,
  Ownedby: [{type: Schema.Types.ObjectId, ref: "User"}],
  userDetails: [userDetailsSchema]
}, {
  timestamps:true
})
module.exports = mongoose.model('Fish', fishSchema);