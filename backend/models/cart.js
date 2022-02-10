const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    cartId: {
        type: String,
        unique: true,
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