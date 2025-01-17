const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = process.env.JWT_SECRET
const bodyParser = require('body-parser')

const Admin = require('../models/Admin')
const User = require('../models/User')
const Course = require('../models/Course')
const Purchase = require('../models/Purchase')
const Categories = require('../models/Categories')
const PageSettings = require('../models/PageSettings')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/test', (req, res) => {
  res.send('admin test')
})

router.post('/add-categories', (req, res) => {
  console.log(req.body)
  const CategoriesTitle = req.body.CategoriesName
  const CategoriesImage = req.body.CategoriesImage
  const cate = req.body

  const newCategorie = {
    categorieName: CategoriesTitle,
    categorieImage: CategoriesImage,
  }

  // console.log(newCategorie)
  Categories.create(newCategorie, function (err, newCat) {
    if (err) {
      console.log(err)
    } else {
      console.log('categorie added')
    }
  })
})

router.get('/get-categories', (req, res) => {
  Categories.find({}, function (err, allCategories) {
    if (err) {
      console.log(err)
    } else {
      res.json(allCategories)
    }
  })
})

router.post('/register', (req, res) => {
  console.log(req.body)
  Admin.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email aldready exists' })
    } else {
      const newUser = new Admin({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log(err)
          }
          newUser.password = hash
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err))
        })
      })
    }
  })
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  Admin.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: 'user not found' })
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        }

        jwt.sign(payload, keys, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token,
          })
        })
      } else {
        return res.status(400).json({ password: 'password incorrect' })
      }
    })
  })
})

//approve the course
router.get('/all-course/permission', (req, res) => {
  Course.find({ permission: 'Pending' }, function (err, allCourse) {
    if (err) {
      console.log(err)
    } else {
      res.json(allCourse)
    }
  })
})

router.put('/all-course/:id/permission', (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    updatedCourse
  ) {
    if (err) {
      res.send(err)
    } else {
      res.send('updated !')
    }
  })
})

//add admin course
router.post('/add-course', (req, res) => {
  // console.log(req.body)
  const title = req.body.title
  const description = req.body.description
  const learning = req.body.learning
  const targetStudent = req.body.targetStudent
  const prerequisites = req.body.prerequisites
  const feeStructure = req.body.feeStructure
  const price = req.body.Price
  const category = req.body.Category
  console.log(price)
  const sections = req.body.sections
  console.log(sections)
  const imageUrl = req.body.image
  const videoUrl = req.body.video
  const userId = req.body.currentUser.currentUserId
  const username = req.body.currentUser.currentUsername

  const date = new Date().toISOString().split('T')[0]

  const newCourse = {
    adminCourse: true,
    permission: 'accept',
    title: title,
    description: description,
    targetStudent: targetStudent,
    userId: userId,
    username: username,
    sections: sections,
    learning: learning,
    feeStructure: feeStructure,
    price: price,
    imageUrl: imageUrl,
    videoUrl: videoUrl,
    prerequisites: prerequisites,
    category: category,
    date: date,
  }

  // console.log(newCourse)

  Course.create(newCourse, function (err, newlyCreated) {
    if (err) {
      console.log(err)
    } else {
      console.log('added course')
    }
  })
})

//update admin added course
router.put('/all-course/:id', (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    updatedCourse
  ) {
    if (err) {
      res.send(err)
    } else {
      res.send('updated !')
    }
  })
})

//delete course
router.delete('/all-course/:id', (req, res) => {
  Course.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send('deleted course')
    }
  })
})

//get admins all admin course
router.get('/all-course', (req, res) => {
  Course.find({ adminCourse: true }, function (err, allCourse) {
    if (err) {
      res.send(err)
    } else {
      res.json(allCourse)
    }
  })
})

//get all course
router.get('/get-all-course', (req, res) => {
  Course.find({}, function (err, allCourse) {
    if (err) {
      res.send(err)
    } else {
      res.json(allCourse)
    }
  })
})

//get all user
router.get('/all-user', (req, res) => {
  User.find({}, function (err, allUsers) {
    if (err) {
      console.log(err)
    } else {
      res.json(allUsers)
    }
  })
})

//get perticular user
router.get('/get-user/:id', (req, res) => {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      console.log(err)
    } else {
      res.json(user)
    }
  })
})

//get all instructor
router.get('/get-instructor', (req, res) => {
  User.find({ instructor: true }, function (err, allInstructor) {
    if (err) {
      console.log(err)
    } else {
      res.json(allInstructor)
    }
  })
})

//get instructor by id
router.get('/get-instructor/:id', (req, res) => {
  User.find({ $and: [{ instructor: true }, { _id: req.params.id }] }, function (
    err,
    instructor
  ) {
    if (err) {
      res.json('no instrutor found')
    } else {
      res.json(instructor)
    }
  })
})

//get all purchase
router.get('/get-purchase', (req, res) => {
  Purchase.find({}, function (err, allPurchase) {
    if (err) {
      console.log(err)
    } else {
      res.json(allPurchase)
    }
  })
})

//admin get . put settings page

router.get('/settings', (req, res) => {
  PageSettings.find({ secret: req.query.secret }, function (err, pageInfo) {
    if (err) {
      console.log(err)
    } else {
      res.json(pageInfo)
    }
  })
})

router.put('/settings/update', (req, res) => {
  const logo = req.body.logo
  const favicon = req.body.favicon
  const description = req.body.description
  const colorTheme = req.body.colorTheme
  const siteName = req.body.siteName
  const secret = req.body.secret
  const contactDetail = req.body.contactDetail
  const contactEmail = req.body.contactemail
  const contactEmailPassword = req.body.password

  const newSetting = {
    logo: logo,
    favicon: favicon,
    siteName: siteName,
    description: description,
    colorTheme: colorTheme,
    secret: secret,
    contactDetail: contactDetail,
    contactEmail: contactEmail,
    contactEmailPassword: contactEmailPassword,
  }
  PageSettings.findOneAndUpdate(
    { secret: secret },
    { $set: newSetting },
    function (err, result) {
      if (err) {
        console.log(err)
      } else {
        res.json(result)
      }
    }
  )
})

router.post('/settings/new', (req, res) => {
  const logo = req.body.logo
  const favicon = req.body.favicon
  const description = req.body.description
  const colorTheme = req.body.colorTheme
  const siteName = req.body.siteName
  const secret = req.body.secret
  const contactDetail = req.body.contactDetail
  const contactEmail = req.body.contactemail
  const contactEmailPassword = req.body.password

  const newSetting = {
    logo: logo,
    favicon: favicon,
    siteName: siteName,
    description: description,
    colorTheme: colorTheme,
    secret: secret,
    contactDetail: contactDetail,
    contactEmail: contactEmail,
    contactEmailPassword: contactEmailPassword,
  }

  PageSettings.create(newSetting, function (err, newlyCreated) {
    if (err) {
      console.log(err)
    } else {
      console.log('settings page added')
    }
  })
})

module.exports = router
