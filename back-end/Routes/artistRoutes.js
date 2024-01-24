const express = require('express')
const controller = require("../Controllers/artistController.js")
const routes = express.Router()


routes.get("/getall",controller.getall)
routes.get("/getone",controller.getone)
routes.post("/add",controller.add)
routes.put("/update/:id",controller.update)
routes.delete("/DELETE/:id",controller.DELETE)

module.exports = routes;
