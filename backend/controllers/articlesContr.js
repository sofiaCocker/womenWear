const articlesDb = require("../db/articlesDb/api.js");

const querystring = require('querystring');

const controller = {
	handleGet: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		res.send(await articlesDb.getItem(parsedQuery));
	},
	handlePost: async (req, res) => {
		const body = req.body;
		res.send(await articlesDb.addItem(body.item));
	},
	handleUpdate: async (req, res) => {
		const body = req.body;
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(await articlesDb.updateItem(id, body.item));
	},
	handleDelete: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(await articlesDb.deleteItem(id));
	}
};

module.exports = controller;