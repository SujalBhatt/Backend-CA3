const express = require("express")
const router = express.Router()
const User = require("./userModel")

router.post("/signup", async (req, res) => {
    try {
        const {username, email, password, dateOfBirth} = req.body
        if (!username) {
            return res.status(400).send("Username cannot be empty")
        }

        if (!email) {
            return res.status(400).send("Email cannot be empty")
        }

        if (password.length > 16 || password.length < 8) {
            return res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
        }

        const newUser = new User({
            username,
            email,
            password,
            dateOfBirth
        })

        await newUser.save()
        return res.status(200).send(newUser)
    } catch(error) {
        console.log(error.message)
    }
})

module.exports = router