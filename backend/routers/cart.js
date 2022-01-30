const express = require("express");
const Cart = require("../models/cart");

const router = new express.Router();

//we use cookies to store a unique cartId so the customer don't the be logged in

//endpoint for getting a cart //cookies is a small database that saves data on your device (locally)
router.get("/cart", async (req, res) => {
  const cartId = req.headers['cartid'] //this is where I get my cartId from cookies
  if (cartId === undefined) {
    res.status(404).send("no cartId provided");
    return
  }
  try {
    const cart = await Cart.findOne({ cartId }); //here we wait for the asynchronous request to complete
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send();
  }
});

//endpoint for adding an item in cart
router.post("/cart/add-item", async (req, res) => {
  const cartId = req.headers['cartid'] //this is where I get my cartId from cookies
  if (cartId === undefined) {
    res.status(404).send("no cartId provided"); //no cartId was found in my cookie collection
    return
  }
  const itemId = req.query.itemId
  if (itemId === undefined) {
    res.status(404).send("no itemId provided");
    return
  }
  try {
    const cart = await Cart.findOne({ cartId });

    //If cart already exists for user
    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);

      //check if product exists or not
      if (itemIndex > -1) {
        res.status(200).send(cart)
        return
        
      } else {
        cart.items.push({ itemId });
        await cart.save();
        res.status(200).send(cart);
      }

    } else {
      //no cart exists, create one
      const newCart = await Cart.create({
        cartId,
        items: [{ itemId }],
      });
      res.status(200).send(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
})

//endpoint for removing ONE item in cart
router.post("/cart/remove-item", async (req, res) => {
  const cartId = req.headers['cartid'] //this is where I get my cartId from cookies
  if (cartId === undefined) {
    res.status(404).send("no cartId provided")
    return
  }

  const itemId = req.query.itemId
  if (itemId === undefined) {
    res.status(404).send("no itemId provided")
    return
  }
  try {
    const cart = await Cart.findOne({ cartId })
    if (cart) {
      const remainingItems = cart.items.filter((item, index) => item.itemId !== itemId)
      cart.items = remainingItems
      await cart.save();

      res.status(200).send(cart);
    }
    else {
      res.status(200).send(null)
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).send("something went wrong")
  }
})

//endpoint for removing ALL items in cart
router.post("/cart/remove-all-items", async (req, res) => {
  const cartId = req.headers['cartid'] //this is where I get my cartId from cookies
  if (cartId === undefined) {
    res.status(404).send("no cartId provided")
    return
  }
  try {
    const cart = await Cart.findOne({ cartId })
    if (cart) {
      cart.items = []
      await cart.save();
      res.status(200).send(cart);
    }
    else {
      res.status(200).send(null)
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).send("something went wrong")
  }
})

module.exports = router;