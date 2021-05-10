const mongoose = require("mongoose");

const {Schema} = mongoose;

const articleSchema = new Schema(
		{
			name: {
				type: String,
				required: [true, "Enter name"]
			},
			imgs: [String],
			description: String,
			content: { type: String,
				required: [true, "Enter description"]
			}
		}
	);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;