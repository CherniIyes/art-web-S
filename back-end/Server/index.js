const express = require('express')
const app = express()
const cors = require("cors");
const PORT = 6900
const db = require("../database/index")
const routes = require("../Routes")




app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())
app.use("/", routes)


app.get('/', (req, res) => {
      res.send('Server Listening')
})

app.listen(PORT, () => {
      console.log("listen on  http://localhost:${PORT}")
})