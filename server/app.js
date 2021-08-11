const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Information')

app.use(bodyParser.json())
const Information = mongoose.model("information")


//password = 1234567890
const mongoUri = "mongodb+srv://thunrada2715:1234567890@project.n1rz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.get('/', (req, res) => {
    res.send("welcome to node js")
})

app.post('/send-data', (req, res) => {
    const information = new Information({
        meal: req.body.meal,
        slave: req.body.slave,
        time: req.body.time
    })
    information.save()
        .then(data => {
            console.log(data)
            res.send("success")
        }).catch(err => {
            console.log(err)
        })
    // console.log(req.body)
})

app.post('/delete', (req, res) => {
    Information.findByIdAndRemove(req.body.id)
        .then(data => {
            console.log(data)
            res.send("deleted")
        })
        .catch(err => {
            console.log(err)
        })
})

    app.listen(3000, () => {
    console.log("server running")
})

        // "meal":"beforBreakfast",
        // "slave":"S1",
        // "time":"11:00"