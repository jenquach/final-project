const express = require("express")
const User = require("../models/user")
const authenticateUser = require("../data/middleware/auth")
const bcrypt = require("bcrypt")

const router = new express.Router()

//Sign up
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (!email.includes("@")) {
			throw "Incorrect entry"
    }

    if (password.length < 8) {
			throw "Password must be at least 8 characters long"
    }

    const newUser = await new User({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    }).save()
    res.status(201).json({
      response: {
        userId: newUser._id,
        name: newUser.name,
        email: newUser.email,
        accessToken: newUser.accessToken
      },
      success: true,
    })
  } catch (error) {
    res.status(400).json({ response: error, success: false})
  }
})

//Sign in
router.post("/signin", async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({ email })

		if (user && bcrypt.compareSync(password, user.password)) {
			res.status(200).json({ 
				response: {
					userId: user._id,
					email: user.email,
          name: user.name,
					accessToken: user.accessToken,
				},
				success: true,
			})
		} else {
			res.status(404).json({
				response: "Invalid e-mail or password",
				success: false,
			})
		}
	} catch (error) {
		res.status(400).json({ response: error, success: false })
	}
})

//My profile
router.get("/my-profile", authenticateUser)
router.get("/my-profile", (req, res) => {
  const { name } = req.body
  res.send(`Welcome ${name}`)
})

module.exports = router