const Article = require("./model/Article.js");
const dbInterface = require("../dbInterface.js");

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(`mongodb+srv://womenWear:${process.env.MONGODB_CONNECTION_PASSWORD}@cluster0.e19zq.mongodb.net/db?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });

class functionality extends dbInterface {
	constructor() {
		super();
		this.getItem = async (pattern) => {
			const found = await Article.find({});
			return found;
		}
		this.addItem = async (item) => {
			const article = new Article(item);
			const created = await article.save();
			return created;
		}
		this.deleteItem = async (id) => {
			const deleted = await Article.findByIdAndDelete(id);
			return deleted;
		}
		this.updateItem = async (id, item) => {
			const curr = await Article.findById(id);
			const updated = await Article.updateOne(curr, item);
			return updated;
		}
	}
	
}

module.exports = new functionality();