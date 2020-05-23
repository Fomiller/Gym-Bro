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
  },
  exercises: [{
    type: Schema.Types.ObjectId,
    ref:'Exercise',
    autopopulate: true
  }],
}, { toJSON: {virtuals: true}});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
UserSchema.plugin(require('mongoose-autopopulate'));
const User = mongoose.model("User", UserSchema);

module.exports = User;