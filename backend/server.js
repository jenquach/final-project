const express = require('express')
const cartRouter = require('./routers/cart')
const indexRouter = require('./routers/index')//require('./db/mongoose')
const cookieParser = require("cookie-parser");
require('./mongoose-settings')



// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// // Add middlewares to enable cors and json body parsing
// app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(indexRouter)
app.use(cartRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})