const express = require("express");
const router = new express.Router();
const Order = require("../models/order");
const Product = require("../models/product");
const Cart = require("../models/cart");
const { v4: uuidv4 } = require('uuid')



router.get("/order/:orderId", async (req, res) => {

  const { orderId } = req.params;
  const order = await Order.findOne({ orderId: orderId });

  if (order === null) {
    res.status(404).send("no order found"); //if there's no cartId in headers send 404 message
    return
  }
  res.status(200).send(order);

})

router.post("/order", async (req, res) => {
  console.log(req.body);

  const cartId = req.body.cartId;

  if (!cartId) {
    res.status(404).send("no cartId provided"); //if there's no cartId in headers send 404 message
    return
  }

  const cart = await Cart.findOne({ cartId }); //here we find ONE cart with a specific ID
  if (cart === null) {
    res.status(404).send("no cart found"); //if there's no cartId in headers send 404 message
    return
  }

  console.log(cart)

  let totalPrice = 0;
  let orderItems = []


  for (let i = 0; i < cart.items.length; i++) {
    const itemId = cart.items[i].itemId;
    console.log(itemId)
    const product = await Product.findOne({ productId: itemId })
    console.log(product);

    orderItems.push({
      itemId: product.productId,
      price: product.price,
    })
    totalPrice += product.price;
  }

  let order = {
    orderId: uuidv4(),
    cartId: cartId,
    customer: {
      name: req.body.name,
      email: req.body.email,
      street: req.body.street,
      zip: req.body.zip,
      city: req.body.city,
      phone: req.body.phone,
    },
    totalPrice: totalPrice,
    items: orderItems,
  };

  const newOrder = await Order.create(order);

  //when order is created, clear cart items
  cart.items = []
  await cart.save();

  res.status(200).send(newOrder.orderId);
});

module.exports = router;