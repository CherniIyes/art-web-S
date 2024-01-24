const express = require('express')
const app = express()
const cors = require("cors");
const PORT = 8080
const db = require("../mysql/index")
const artRoutes = require("../Routes/artRoutes.js")
const artistRoutes =require("../Routes/artistRoutes.js")




app.use(cors())
app.use(express.json())
app.use("/art", artRoutes)
app.use("/artist", artistRoutes)


app.get('/', (req, res) => {
      res.send('Server Listening')
})

app.listen(PORT, () => {
      console.log(`listen on  http://localhost:${PORT}`)
})