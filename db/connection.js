const mongoose = require('mongoose');
mongoose.Promise = Promise;

const mongoURI = 'mongodb://localhost/crm';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((instance) =>
		console.log(`Connected to db ${instance.connection.name}`)
	)
	.catch((error) => console.log('Connection failed:', error));

module.exports = mongoose;
