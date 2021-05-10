

const express = require("express");

const adminPanelContr = require("./../controllers/adminPanelContr.js");
const navbarContr = require("./../controllers/navbarContr.js");
const productsContr = require("./../controllers/productsContr.js");
const usersContr = require("./../controllers/usersContr.js");
const articlesContr = require("./../controllers/articlesContr.js");

const router = express.Router();


router.get("/adminPanel", adminPanelContr.handleGet).post("/adminPanel", adminPanelContr.handlePost).put("/adminPanel?:id", adminPanelContr.handleUpdate).delete("/adminPanel?:id", adminPanelContr.handleDelete);

router.get("/navbar", navbarContr.handleGet).post("/navbar", navbarContr.handlePost).put("/navbar?:id", navbarContr.handleUpdate).delete("/navbar?:id", navbarContr.handleDelete);

router.get("/products", productsContr.handleGet).post("/products", productsContr.handlePost).put("/products?:id", productsContr.handleUpdate).delete("/products?:id", productsContr.handleDelete);

router.get("/users", usersContr.handleGet).post("/users", usersContr.handlePost).put("/users?:id", usersContr.handleUpdate).delete("/users?:id", usersContr.handleDelete);

router.get("/articles", articlesContr.handleGet).post("/articles", articlesContr.handlePost).put("/articles?:id", articlesContr.handleUpdate).delete("/articles?:id", articlesContr.handleDelete);

module.exports = router;

// mongodb+srv://womenWear:<password>@cluster0.e19zq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority