const express = require("express")
const path = require("path")

const app = express()
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

const PORT = 8000

app.use(express.static(path.join(__dirname, "./static")))
app.use(express.static(path.join(__dirname, "./client/dist")))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(fileUpload())

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})