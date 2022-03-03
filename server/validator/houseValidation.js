import { check } from "express-validator"


const houseValidation = () => {
    //?return []
    return [
    check('title')
        .isLength({ min: 3, max: 50 })
        .withMessage('Title should be betweeen 3 and 50 characters.'),
    check('description')
        .isLength({ min: 10, max: 200 })
        .withMessage('Description should be betweeen 10 and 100 characters.'),
    check('address')
        .isLength({ min: 10, max: 100 })
        .withMessage('Address should be betweeen 10 and 100 characters.'),
    check('price')
        .isNumeric()
        .withMessage('Price should be a number')
    ]
}

export default houseValidation

