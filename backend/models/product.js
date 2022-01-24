const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: true,
    required: true,
  },
  productName: {
    type: String,
  },
  desc: {
    type: String,
  },
  condition: {
    type: String,
  },
  category: {
    type: String,
  },
  size: {
    type: String,
  },
  price: {
    type: Number,
  },
  img1: {
    type: String,
  },
  img2: {
    type: String,
  }
}, {
  timestamps: true
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product