const Header = require("./model/Header.js");
const dbInterface = require("../dbInterface.js");

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(`mongodb+srv://womenWear:${process.env.MONGODB_CONNECTION_PASSWORD}@cluster0.e19zq.mongodb.net/db?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });


class functionality extends dbInterface {
	constructor() {
		super();
		this.getItem = async (pattern) => {
			const found = await Header.find({});
			return found;
		}
		this.addItem = async (item) => {
			const header = new Header(item);
			const created = await header.save();
			return created;
		}
		this.deleteItem = async (id) => {
			const deleted = await Header.findByIdAndDelete(id);
			return deleted;
		}
		this.updateItem = async (id, item) => {
			const curr = await Header.findById(id);
			const updated = await Header.updateOne(curr, item);
			return updated;
		}
	}
	
}

module.exports = new functionality();