const express = require('express') //Use require() to Include External Modules
const cors = require('cors')
const cartRouter = require('./routers/cart')
const productRouter = require('./routers/product')
const indexRouter = require('./routers/index')//require('./db/mongoose')
const cookieParser = require("cookie-parser");

const productData = require('./data/products.json') 
const Product = require("./models/product");

require('./mongoose-settings') //Node.js can use this module to manipulate MongoDB databases

//comment in this when you run the app for the first time
//process.env.RESET_PRODUCT_DB=true


// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// // Add middlewares to enable cors and json body parsing
 app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(indexRouter)
app.use(cartRouter)
app.use(productRouter)


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})



if (process.env.RESET_PRODUCT_DB) { 
  const seedDatabase = async () => { //this is an asyncrounus function
    await Product.deleteMany({}) //first it does this part

    productData.forEach(item => { //for each loop the array of books
      const newProduct = new Product(item) //the item is the new information 
      newProduct.save()
    })
  }
  seedDatabase()
}