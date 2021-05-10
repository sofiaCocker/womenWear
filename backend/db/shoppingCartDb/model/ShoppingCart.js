const mongoose = require("mongoose");

const Product = require("../../productsDb/model/Product.js").schema;

const User = require("../../usersDb/model/User.js").schema;

const {Schema} = mongoose;

const shoppingCartSchema = new Schema(
		{
			owner: User,
			content: [Product]
	);

const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);

module.exports = ShoppingCart;