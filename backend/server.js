const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
// const LocalStrategy = require("passport-local")

//database models
const User = require('./models/User')

const app = express()
require('dotenv').config()

//route config
const user = require('./routes/users')
const image = require('./routes/fileUpload')
const instructor = require('./routes/instructor')
const admin = require('./routes/admin')

const { MongoStore } = require('connect-mongo')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//database
const db = process.env.MONGO_URI

if (!(process.env.MONGO_URI && process.env.JWT_SECRET)) {
  console.log("Required Parameters doesn't exist in .env file")
  process.exit(0)
}

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.use(passport.initialize())
require('./config/passport')(passport)

app.get('/', (req, res) => {
  res.send('test route')
})

//routes
app.use('/user', user)
app.use('/image', image)
app.use('/instructor', instructor)
app.use('/admin', admin)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on port ${port}`))
