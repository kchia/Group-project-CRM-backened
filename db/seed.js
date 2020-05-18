const User = require('../models/User');
const Client = require('../models/Client');
const Communication = require('../models/Communication');
const Transaction = require('../models/Transaction');
// const Product = require('../models/Product');

const usersData = require('./usersSeed.json');
const clientsData = require('./clientsSeed.json');

// const productsData = require('./productSeed.json');

//clear users collection and insert user data into collection
User.deleteMany({}).then(() => {
	console.log('delete all users');
	return User.collection.insertMany(usersData);
});

//clear client collection and insert client data into collection
Client.deleteMany({}).then(() => {
	console.log('delete all clients');
	return Client.collection.insertMany(clientsData);
});

//clear communication collection and insert communications data into collection
Communication.deleteMany({}).then(() => {
	User.findOne({ email: 'rdellis1@gmail.com' }).then((user) => {
		Client.findOne({ email: 'JoeP@gmail.com' }).then((client) => {
			Communication.create({
				subject: 'subject1',
				body: 'Body of Communication1',
				date: new Date(),
			}).then((comm) => {
				user.communications.push(comm);
				user.save();
				client.communications.push(comm);
				client.save();
				comm.user.push(user);
				comm.client.push(client);
				comm.save();
			});
		});
	});
});

//clear transaction collection and insert transactions data into collections
Transaction.deleteMany({}).then(() => {
	User.findOne({ email: 'rdellis1@gmail.com' }).then((user) => {
		Client.findOne({ email: 'JoeP@gmail.com' }).then((client) => {
			Transaction.create({
				product: 'product1',
				price: 37.50,
				date: new Date(),
			}).then((tran) => {
				user.transactions.push(tran);
				user.save();
				client.transactions.push(tran);
				client.save();
				tran.user.push(user);
				tran.client.push(client);
				tran.save();
			});
		});
	});
});

//clear product collection and insert product data into collection
// Product.deleteMany({})
// 	.then(() => {
// 		console.log('delete all products');
// 		return Product.collection.insertMany(productsData);
// 	})
// 	.then(() => {
// 		process.exit;
// 	});
