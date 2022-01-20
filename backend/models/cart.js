const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    cartId: {
        type: String,
        unique: true, //not allowed users with same email
        required: true, //should be required
    },
    items: [{
        itemId: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart