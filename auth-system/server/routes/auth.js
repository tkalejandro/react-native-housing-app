import express from "express"
import errorValidationChecker from "../../../server/middleware/errorValidationChecker.js"
import User from "../models/User.js"
import userValidation from "../validator/userValidation.js"
import bcrypt from "bcryptjs"

const router = express.Router()

router.post("/register", [userValidation(), errorValidationChecker()], async (req, res) => {
    try {
        //? User exist?

        const userExist = await User.findOne({email: req.body.email})
        if (userExist) return res.status(400).send('Email already exists')

        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashPassword
        })
        await user.save()

        res.json({
            id: user._id,
            fullName: user.fullName,
            email: user.email,
        })


    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err })
    }
})

router.post("/login", (req, res) => {
    res.send("login route")
})

export default router