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
		allowNull: false
	}
})

const Product = db.define('products', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	Title: {
		Sequelize.STRING,
		allowNull: false
	},
	Description: {}
		Sequelize.STRING,
		allowNull: false
	},
	Category: {
		Sequelize.STRING,
		allowNull: false
	},
	Location: {
		Sequelize.STRING,
		allowNull: false
	},
	Price: {
		type: Sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0.0
	},
	DateOfPosting: {
		Sequelize.STRING,
		allowNull: false
	},
	DeliveryType: {
		Sequelize.STRING,
		allowNull: false
	},
	SellerInfo: {
		Sequelize.STRING,
		allowNull: false
	},
})

export = module.exports = {
	User, Product
}