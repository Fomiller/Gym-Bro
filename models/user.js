const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  email:{
    type: String,
    unique: true,
    required: (true, 'email is Required')
  },
  password:{
    type: String,
    required: (true, 'Password is Required')
  },
  username: {
    type: String,
    unique:true,
    required: (true, 'Username is Required'),
  }
}, { toJSON: {virtuals: true}});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
const User = mongoose.model("User", UserSchema);

module.exports = User;