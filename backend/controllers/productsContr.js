const productsDb = require("../db/productsDb/api.js");

const querystring = require('querystring');

const controller = {
	handleGet: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		res.send(await productsDb.getItem(parsedQuery));
	},
	handlePost: async (req, res) => {
		const body = req.body;
		res.send(await productsDb.addItem(body.item));
	},
	handleUpdate: async (req, res) => {
		const body = req.body;
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(await productsDb.updateItem(id, body.item));
	},
	handleDelete: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(await productsDb.deleteItem(id));
	}
};

module.exports = controller;