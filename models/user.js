const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:{
    type: String,
    require: "Email is required"
  },
  password:{
    type: String,
    require: "Password is required"
  }
}, { toJSON: {virtuals: true}});
const User = mongoose.model("User", UserSchema);

module.exports = User;