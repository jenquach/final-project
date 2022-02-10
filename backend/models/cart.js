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
    timestamps: true //when you write a document to mongo - mongo will make their own time stamp which is shown in 
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart