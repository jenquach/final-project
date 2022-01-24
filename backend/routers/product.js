

const express = require("express");
const Product = require("../models/product");

const router = new express.Router();

//end-point for getting one specific product
router.get("/product/:productId", async (req, res) => {
    const productId = req.params.productId
    if (productId === undefined) {
        res.status(404).send("no productId");
        return
    }
    try {
        const product = await Product.findOne({ productId });
        if (product === null) {
            res.status(404).send("no product found");
        }
        else {
            res.status(200).send(product);
        }
    } catch (error) {
        res.status(500).send();
    }
});

//end-point for all products
router.get("/products/", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send();
    }
});

//end-point for getting proucts filtered by category
router.get("/products/:category", async (req, res) => {
    const category = req.params.category
    if (category === undefined) {
        res.status(404).send("no category provided");
        return
    }
    try {
        const products = await Product.find({ category: category })
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;