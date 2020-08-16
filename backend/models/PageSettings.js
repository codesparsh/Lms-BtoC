const mongoose = require('mongoose')
const Schema = mongoose.Schema

var PageSettings = new Schema({
  secret: {
    type: String,
    default: 'LMS',
  },
  logo: {
    type: String,
    default: '',
  },
  favicon: {
    type: String,
    default: '',
  },
  siteName: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  colorTheme: {
    type: String,
    default: '#303956',
  },
  contactDetail: {
    type: String,
    default: '',
  },
  contactEmail: {
    type: String,
    default: '',
  },
  contactEmailPassword: {
    type: String,
    default: '',
  },
})

module.exports = PageSettings = mongoose.model('PageInfo', PageSettings)
