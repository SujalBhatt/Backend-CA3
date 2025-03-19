const express = require("express")
const app = express()
const router = require("./route")
const db = require("./db")

app.use(express.json())

app.use("/", router)

app.listen(8000, async () => {
    try {
        await db()
        console.log("Server connected")
    } catch(error) {
        console.log(error.message)
    }
})
