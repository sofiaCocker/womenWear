const mongoose = require("mongoose");

const {Schema} = mongoose;

const productSchema = new Schema(
		{
			name: {
				type: String,
				required: [true, "Enter name"]
			},
			imgs: [String],
			description: String,
			price: {
				type: Number,
				required: [true, "Enter price"]
			}
		}
	);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;