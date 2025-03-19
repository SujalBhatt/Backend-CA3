const mongoose = require("mongoose")

const db = async(req, res) => {
    try {
        await mongoose.connect("mongodb+srv://vimlabhatt97:KVSs75@cluster0.q8t0m.mongodb.net/Backend")
        console.log("Mongo connected")
    } catch(error) {
        console.log(error.message)
    }
}

module.exports = db