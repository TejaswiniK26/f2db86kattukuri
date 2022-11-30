const mongoose = require("mongoose")
const fishesSchema = mongoose.Schema({
    Fish_Name: { type: String, minLength: 2 },
    country: String,
    price: { type: Number, min: 5, max: 500 }
})

module.exports = mongoose.model("Fishes", fishesSchema)