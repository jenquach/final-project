const express = require('express') //Use require() to Include External Modules
var cors = require('cors')

const cartRouter = require('./routers/cart')
const productRouter = require('./routers/product')
const indexRouter = require('./routers/index')//require('./db/mongoose')
const userRouter = require('./routers/user')
const orderRouter = require('./routers/order')

const productData = require('./data/products.json')
const Product = require("./models/product");

require('./mongoose-settings') //Node.js can use this module to manipulate MongoDB databases

//comment in this when you run the app for the first time
process.env.RESET_PRODUCT_DB = true


//defines the port the app will run on
const port = process.env.PORT || 8080
const app = express()

//add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())
app.use(indexRouter)
app.use(cartRouter)
app.use(productRouter)
app.use(userRouter)
app.use(orderRouter)


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})


if (process.env.RESET_PRODUCT_DB) {
  const seedDatabase = async () => { 
    await Product.deleteMany({}) 

    productData.forEach(item => { 
      const newProduct = new Product(item) 
      newProduct.save()
    })
  }
  seedDatabase()
}