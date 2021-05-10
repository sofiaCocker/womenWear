const mongoose = require("mongoose");

const Product = require("../../productsDb/model/Product.js").schema

const {Schema} = mongoose;

const headerSchema = new Schema(
		{
			name: {
				type: String,
				required: [true, "Enter name"],
				unique: true
			},
			products: [Product]
		}
	);

const Header = mongoose.model("Header", headerSchema);

module.exports = Header;