import express from "express"
import House from "../models/House.js"
import { validationResult } from "express-validator"
import houseValidation from "../validator/houseValidation.js"
import errorValidationChecker from "../middleware/errorValidationChecker.js"
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await House.find()
        res.json(response)
    } catch (err) {
        console.log(err)
        res.send({ message: e })
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await House.findById(id)
        res.json(response)
    } catch (err) {
        console.log(err)
        res.send({ message: e })
    }
})

// /api/houses/
router.post('/', [houseValidation(), errorValidationChecker()], async (req, res) => {

    // const errors = validationResult(req)
    // //console.log(errors)
    // if (!errors.isEmpty()) return res.status(422).send({ errors: errors })
    try {
        const house = new House({
            title: req.body.title,
            address: req.body.address,
            homeType: req.body.homeType,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            yearBuilt: req.body.yearBuilt,
        }) //? save from function
        await house.save()
        res.json({
            message: 'House data created successfully',
            data: house
        })
    } catch (e) {
        console.log(e)
        res.send({ message: e })
    }
    // const house = new House({
    //     title: req.body.title,
    //     address: req.body.address,
    //     homeType: req.body.homeType,
    //     description: req.body.description,
    //     price: req.body.price,
    //     image: req.body.image,
    //     yearBuilt: req.body.yearBuilt,
    // }) //? save from function
    // house.save()
    //     .then(result => {
    //         res.send({
    //             message: 'House data created successfully',
    //             data: result
    //         })
    //     })
    //     .catch(err => console.log(err)) 

})

//module.exports = router;
export default router