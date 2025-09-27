const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
       default:"USER"
    },
    status:{
        type: String,
       default:"ACTIVE"
    },
    location:{
        type: String,
       default:"ISLAMABAD"
    },
    password:{
        type: String,
        required: true
    },
    phoneNum:{
        type: Number,
        default:"099243342210",
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;