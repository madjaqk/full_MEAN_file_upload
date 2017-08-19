const mongoose = require("mongoose")

const RatSchema = new mongoose.Schema({
	name: String,
	age: Number,
	pic_url: String
}, {timestamps: true})

mongoose.model("Rat", RatSchema)