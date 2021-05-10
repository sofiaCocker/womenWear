const ShoppingCart = require("./model/ShoppingCart.js");
const dbInterface = require("../dbInterface.js");

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(`mongodb+srv://womenWear:${process.env.MONGODB_CONNECTION_PASSWORD}@cluster0.e19zq.mongodb.net/db?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });

class functionality extends dbInterface {
	constructor() {
		super();
		this.getItem = async (pattern) => {
			const found = await ShoppingCart.find({});
			return found;
		}
		this.addItem =  async (item) => {
			const cart = new ShoppingCart(item);
			const created = await cart.save();
			return created;
		}
		this.deleteItem = async (id) => {
			const deleted = await ShoppingCart.findByIdAndDelete(id);
			return deleted;
		}
		this.updateItem = async (id, item) => {
			const curr = await ShoppingCart.findById(id);
			const updated = await ShoppingCart.updateOne(curr, item);
			return updated;
		}
	}
	
}

module.exports = new functionality();