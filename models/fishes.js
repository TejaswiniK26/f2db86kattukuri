const mongoose = require("mongoose")
const fishesSchema = mongoose.Schema({
    Fish_Name: String,
    country: String,
    price: Number
})

module.exports = mongoose.model("Fishes", fishesSchema)