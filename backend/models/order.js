const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    unique: true,
    required: true,
  },
  cartId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  customer: {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    street: {
      type: String,
      required: false,
    },
    zip: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
  },
  items: [{
    itemId: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }]
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order