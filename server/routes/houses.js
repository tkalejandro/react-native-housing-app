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
    try {
        const houseId = req.params.id
        const house = await House.findOne({_id: houseId})
        if(!house) return res.json({message: "Didnt find this house"})
        res.json(house)
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

router.put('/:id', [houseValidation(), errorValidationChecker()] , async (req, res) => {
    try {
        const houseId = req.params.id
        const house = await House.findOne({_id: houseId})
        if(!house) return res.json({message: "Didnt find this house"})

        house.title = req.body.title
        house.address = req.body.address
        house.homeType = req.body.homeType
        house.description = req.body.description
        house.price = req.body.price
        house.image = req.body.image
        house.yearBuilt = req.body.yearBuilt 

        await house.save()

        res.status(200).json(house)
    } catch (err) {
        console.log(err)
        res.send({message: e})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const houseId = req.params.id
        const house = await House.findOne({_id: houseId})
        if(!house) return res.json({message: "Didnt find this house"})

        //?This save automatically
        await House.findOneAndDelete({_id: houseId})
        
        res.json({message: "House Deleted"})
    } catch (err) {
        console.log(err)
        res.send({message: err})
    }
})
//module.exports = router;
export default router