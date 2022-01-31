const express = require("express");
const Cart = require("../models/cart");

const router = new express.Router();


//endpoint for getting a cart 
router.get("/cart", async (req, res) => {
  const cartId = req.headers['cartid'] //this is where we get our cartId: from headers
  if (cartId === undefined) {
    res.status(404).send("no cartId provided"); //if there's no cartId in headers send 404 message
    return
  }
  try {
    const cart = await Cart.findOne({ cartId }); //here we fint ONE cart with a specific ID
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send();
  }
});

//endpoint for adding an item in cart
router.post("/cart/add-item", async (req, res) => {
  const cartId = req.headers['cartid'] //this is where we get our cartId from headers
  if (cartId === undefined) {
    res.status(404).send("no cartId provided"); //no cartId was found in my header collection
    return
  }
  const itemId = req.query.itemId //query parameter for what product should be added in the cart
  if (itemId === undefined) {
    res.status(404).send("no itemId provided");
    return
  }
  try {
    const cart = await Cart.findOne({ cartId });

    //If cart already exists for user 
    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);
      if (itemIndex > -1) { //check if product exists or not in the cart

        res.status(200).send(cart) //if cartItem exists return success
        return
      } else {
        cart.items.push({ itemId }); //if cartItem do not exist push to array and save cart
        await cart.save();
        res.status(200).send(cart);
      }
    } else {
      //no cart exists for the cartID, create new one
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
  const cartId = req.headers['cartid']
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
    const cart = await Cart.findOne({ cartId }) //if cartId found remove item with that specific Id
    if (cart) {
      const remainingItems = cart.items.filter((item, index) => item.itemId !== itemId) //all cart items except the one that are removed
      cart.items = remainingItems
      await cart.save(); //save new cart

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
  const cartId = req.headers['cartid'] 
  if (cartId === undefined) {
    res.status(404).send("no cartId provided")
    return
  }
  try {
    const cart = await Cart.findOne({ cartId })
    if (cart) {
      cart.items = [] //instead of fllitering like on line 78 - here we remove all items
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