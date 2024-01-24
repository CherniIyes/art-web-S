const  express=require('express')
const controller = require("../Controllers//artController.js")
const routes =  express.Router()


routes.get("/art/getall",controller.getall)
routes.get("/art/getone",controller.getone)
routes.get("/art/add",controller.add)
routes.get("/art/update/:id",controller.update)
routes.get("/art/DELETE/:id",controller.DELETE)

module.exports = routes;
