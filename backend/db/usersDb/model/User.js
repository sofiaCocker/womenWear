const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema(
		{
			name: {
				type: String,
				required: [true, "Enter name"]
			},
			email: {
				type: String,
				validate: {
					validator: (address) => {
						return /\S+@\S+\.\S+/.test(address);
					},
					message: "Enter a valid email address"
				},
				required: [true, "Enter email"],
				unique: true
			}
		}
	);

const User = mongoose.model("User", userSchema);

module.exports = User;