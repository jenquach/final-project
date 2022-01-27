const mongoose = require("mongoose")
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    trim: true,
  },
  accessToken: {
    type: String,
    required: true,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
})

// User model 
const User = mongoose.model("User", userSchema)

module.exports = User