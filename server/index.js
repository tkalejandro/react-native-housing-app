const express = require('express')

const app = express()
require('dotenv').config()

const homes =[
    {id: 1,
    type: "apartment",
    description: "description",
   }, 
   {id: 2,
    type: "apartment",
    description: "description",
   }
]
app.get('/', (req,res) => {
    res.send('Welcome to express')
})
app.get('/api/listening', (req, res) => {
    res.send(homes)
})
app.get('/api/listening/:id', (req, res) => {
    const {id} = req.params

    const home = homes.find(home => home.id === parseInt(req.params.id))

    if(!home) {
        res.status(404).send('The home with given ID is not found')
    }

    res.send(home)
   
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on ${port}`))