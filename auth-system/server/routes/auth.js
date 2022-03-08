import express from "express"
import errorValidationChecker from "../../../server/middleware/errorValidationChecker.js"
import User from "../models/User.js"
import userValidation from "../validator/userValidation.js"


const router = express.Router()

router.post("/register", [userValidation(), errorValidationChecker()], async (req, res) => {
    try {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    })
    await user.save()

    res.json(user)


    } catch (err) {
        console.log(err)
        res.status(400).json({message: err})
    }
})

router.post("/login", (req, res) => {
    res.send("login route")
})

export default router