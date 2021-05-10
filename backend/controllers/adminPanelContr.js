const productsDb = require("../db/productsDb/api.js");
const headersDb = require("../db/headersDb/api.js");
const articlesDb = require("../db/articlesDb/api.js");

const querystring = require('querystring');


const controller = {
	handleGet: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		res.send({products: await productsDb.getItem(parsedQuery),
			headers: await headersDb.getItem(parsedQuery),
			articles: await headersDb.getItem(parsedQuery)
		});
	},
	handlePost: async (req, res) => {
		const body = req.body;
		console.log(req)
		res.send(
			{products: await productsDb.addItem(body.id),
			headers: await headersDb.addItem(body.id),
			articles: await headersDb.addItem(body.id)
		}
			);
	},
	handleUpdate: async (req, res) => {
		const body = req.body;
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(
{products: await productsDb.updateItem(id, body.id),
			headers: await headersDb.updateItem(id, body.id),
			articles: await headersDb.updateItem(id, body.id)
		}
			);
	},
	handleDelete: async (req, res) => {
		const query = req._parsedUrl.query;
		const parsedQuery = querystring.parse(query);
		const id = parsedQuery.id;
		res.send(
					{products: await productsDb.deleteItem(id),
			headers: await headersDb.deleteItem(id),
			articles: await headersDb.deleteItem(id)
		}
			);
	}
};

module.exports = controller;