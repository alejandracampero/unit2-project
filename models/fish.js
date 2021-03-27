const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishSchema = new Schema({
  species: {type: String},
  imageUrl: {type: String},
  description: {type: String},
  care:{type: String},
  tankSize:{type: String}
}, {
  timestamps:true
})
module.exports = mongoose.model('Fish', fishSchema);