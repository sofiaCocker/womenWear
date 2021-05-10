const usersDb = require("../db/usersDb/api.js");

const querystring = require('querystring');

const controller = {
	handleGet: async (req, res) => {
		console.log("get req")
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const data = await usersDb.getItem({});
		res.send(data);
		},
	handlePost: async (req, res) => {
		const body = req.body;
		res.send(await usersDb.addItem(body.item));
	},
	handleUpdate: async (req, res) => {
		const body = req.body;
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(await usersDb.updateItem(id, body.item));
	},
	handleDelete: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(await usersDb.deleteItem(id));
	}
};

module.exports = controller;