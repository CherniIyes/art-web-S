const express = require('express')
const controller = require("../Controllers/artistController.js")
const routes = express.Router()


routes.get("/getall", controller.getall)
routes.get("/getone", controller.getone)
routes.get("/add", controller.add)
routes.get("/update", controller.update)
routes.get("/DELETE", controller.DELETE)

module.exports = routes;
