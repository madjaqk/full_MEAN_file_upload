const path = require("path")

const rats = require("./../controllers/rats")

module.exports = app => {
	app.get("/all_rats", rats.index)
	app.post("/upload", rats.upload)
}