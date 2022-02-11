const User = require("../../models/user")

//check if access token was sent with the request
const authenticateUser = async (req, res, next) => { 
	const accessToken = req.header("Authorization")

	try {
		const user = await User.findOne({ accessToken })
		if (user) {
      req.user = user
			next()
		} else {
			res.status(401).json({ response: 'Please log in', success: false })
		}
	} catch (error) {
		res.status(400).json({ response: error, success: false })
	}
}

module.exports = authenticateUser