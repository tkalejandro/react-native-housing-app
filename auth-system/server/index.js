import express from "express";


//? Routes
import auth from "./routes/auth.js"

const app = express()


app.get("/", (req, res) => {
    res.send("Welcome to the auth system")
})

app.use("/api/users", auth)

app.listen(3000, () => console.log("Server is running"))