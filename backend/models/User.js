const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const passportLocalMongoose = require("passport-local-mongoose")

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Date,
  },
  sex: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  fieldOfIntrest: [
    {
      type: String,
    },
  ],
  instructor: {
    type: Boolean,
    default: false,
  },
  resetLink: {
    data: String,
    default: '',
  },
  date: {
    type: String,
  },
  emailConfirmationLink: {
    type: String,
    default: '',
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  },
  purchaseId: [
    {
      type: String,
    },
    // productId:{ type: Schema.Types.ObjectId , ref: 'addproduct' }
  ],
})

// UserSchema.plugin(passportLocalMongoose)

module.exports = User = mongoose.model('User', UserSchema)
