// const express = require('express')
// const mongoose = require('mongoose')

import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan";

//? Route
//const houses = require("./routes/houses")
import houses from "./routes/houses.js"

//? Translate the req.
// const bodyParser =  require('body-parser')
const app = express()
dotenv.config()

app.use(morgan("tiny"))
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the house listing API')
})
app.use('/api/houses', houses)
const port = process.env.PORT || 3000

mongoose.connect(`mongodb+srv://tkalejandro:qwert1234@cluster0.3hieq.mongodb.net/housing_app?retryWrites=true&w=majority`)
.then(result => {
    
    app.listen(port, () => console.log(`Server is running on ${port}`))
})
.catch( err => console.log(err))

