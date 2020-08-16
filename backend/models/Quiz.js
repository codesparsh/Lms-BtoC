const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const passportLocalMongoose = require("passport-local-mongoose")

var QuizSchema = new Schema({
  instructorId: {
    type: String,
  },
  question: {
    type: String,
  },
  options: [
    {
      type: String,
    },
  ],
  answer: {
    type: String,
  },
})

// UserSchema.plugin(passportLocalMongoose)

module.exports = Quiz = mongoose.model('Quiz', QuizSchema)
