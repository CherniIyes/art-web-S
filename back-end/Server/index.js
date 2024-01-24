const express = require('express')
const app = express()
const cors = require("cors");
const PORT = 6900
const db = require("../mysql/index")
const artRoutes = require("../Routes/artRoutes.js")
const artistRoutes = require("../Routes/artistRoutes.js")




app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())
app.use("/art", artRoutes)
app.use("/artist", artistRoutes)


app.get('/', (req, res) => {
      res.send('Server Listening')
})

app.listen(PORT, () => {
      console.log("listen on  http://localhost:${PORT}")
})