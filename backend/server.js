const express = require("express");
require("dotenv").config();

const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

const router = require("./routes/router");

const PORT = process.env.PORT || 5001;



app.use(express.json());

app.use(cors());

app.use(router);

app.listen(PORT, () => {
	console.log("Server listening on port ", PORT);
	
});

