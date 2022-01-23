const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1/finalproject", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
mongoose.Promise = Promise;
