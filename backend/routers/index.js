const express = require("express");
const router = new express.Router();

//get cart items

router.get("/", async (req, res) => {
  res.send('Hello world')
});

module.exports = router;