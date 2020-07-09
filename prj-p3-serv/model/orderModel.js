var mongoose = require('../config/dbConnect')
var Schema = mongoose.Schema

var orderSchema = new Schema({
    name:String,
    amount:Number,
    gend:String,
    time:String,
    pos:String,
    date:String,
    food:String,
    idea:String,
    ads:String,
    seat:String,
    role:{
        type:String,
        default:'order'
    }
},{collection:'order'})    

var orderModel = mongoose.model('order',orderSchema)
module.exports = orderModel