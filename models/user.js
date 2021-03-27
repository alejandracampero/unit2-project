const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    bio: String,
    fishcollection: [{type: Schema.Types.ObjectId, ref: "Fish"}],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
