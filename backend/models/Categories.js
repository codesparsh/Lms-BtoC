const mongoose = require('mongoose')
const Schema = mongoose.Schema

var CategoriesSchema = new Schema({
  categorieName: {
    type: String,
    default: '',
  },
  categorieImage: {
    type: String,
    default: '',
  },
  subcategory: [
    {
      type: String,
      default: '',
    },
  ],
})

module.exports = Categories = mongoose.model('Categories', CategoriesSchema)
