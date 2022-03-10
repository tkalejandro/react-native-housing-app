// const express = require('express')
// const mongoose = require('mongoose')

import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan";
import cors from "cors"
//? Route
//const houses = require("./routes/houses")
import houses from "./routes/houses.js"

//? Translate the req.
// const bodyParser =  require('body-parser')
const app = express()
app.use(cors())
dotenv.config()

app.use(morgan("tiny"))
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the house listing API')
})
app.use('/api/houses', houses)
const port = process.env.PORT || 3000

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3hieq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(result => {
    
    app.listen(port, () => console.log(`Server is running on ${port}`))
})
.catch( err => console.log(err))

