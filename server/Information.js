const mongoose = require('mongoose')

const InformationSchema = new mongoose.Schema({
    meal:String,
    slave:String,
    time:String
})

mongoose.model("information",InformationSchema)