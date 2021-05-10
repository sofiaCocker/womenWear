const headersDb = require("../db/headersDb/api.js");

const querystring = require('querystring');

const controller = {
	handleGet: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		res.send(await headersDb.getItem(parsedQuery));
	},
	handlePost: async (req, res) => {
		const body = req.body;
		res.send(await headersDb.addItem(body.item));
	},
	handleUpdate: async (req, res) => {
		const body = req.body;
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(await headersDb.updateItem(id, body.item));
	},
	handleDelete: async (req, res) => {
		console.log(req)
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		console.log(query, parsedQuery)
		const id = parsedQuery.id;
		res.send(await headersDb.deleteItem(id));
	}
};

module.exports = controller;