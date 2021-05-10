const User = require("./model/User.js");
const dbInterface = require("../dbInterface");

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(`mongodb+srv://womenWear:${process.env.MONGODB_CONNECTION_PASSWORD}@cluster0.e19zq.mongodb.net/db?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });

class functionality extends dbInterface {
	constructor() {
		super();
		this.getItem = async (pattern) => {
			const data = await User.find({});
			return data
		}
		this.addItem = async (item) => {
			const user = new User(item);
			const created = await user.save();
			return created;
		}
		this.deleteItem = async (id) => {
			const deleted = await User.findByIdAndDelete(id);
			return deleted;
		}
		this.updateItem = async (id, item) => {
			const curr = await User.findById(id);
			const updated = await User.updateOne(curr, item);
			return updated;
		}
	}
	
}


module.exports = new functionality()