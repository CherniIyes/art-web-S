const  express=require('express')
const controller = require("../Controllers//artController.js")
const routes =  express.Router()


routes.get("/art/getall",controller.getall)
routes.get("/art/getone",controller.getone)
routes.post("/art/add",controller.add)
routes.put("/art/update/:id",controller.update)
routes.delete("/art/DELETE/:id",controller.DELETE)

module.exports = routes;
