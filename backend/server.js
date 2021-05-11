const express = require("express");
require("dotenv").config({path: "backend/.env.development"});

const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

const router = require("./routes/router");

const PORT = process.env.PORT || 5001;

console.log(process.env.MONGODB_CONNECTION_PASSWORD)

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(PORT, () => {
	console.log("Server listening on port ", PORT);
	
});

