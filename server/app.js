const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Information')

const Information = mongoose.model("information")


//password = 1234567890
const mongoUri = "mongodb+srv://thunrada2715:1234567890@project.n1rz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology:true 
})

mongoose.connection.on("connected", () => {
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error", (err) => {
    console.log("error",err)
})

app.get('/', (req, res) => {
    res.send("welcome to node js")
})

app.listen(3000, () => {
    console.log("server running")
})