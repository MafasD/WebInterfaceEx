const Sequelize = require('sequelize')

const db = new Sequelize('shop', 'shopper', 'shoppass', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		min: 0,
		max: 5,
	}
})

const User = db.define('users', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	}
})

const Product = db.define('products', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false
	},
	category: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0.0
	},
	date: {
		type: Sequelize.STRING,
		allowNull: false
	},
	delivery: {
		type: Sequelize.STRING,
		allowNull: false
	},
	seller: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

db.sync()
	.then(() => console.log("Database has been synced"))
	.catch((err) => console.error("Error in creating database"))

exports = module.exports = {
	User, Product
}