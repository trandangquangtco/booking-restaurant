var mongoose = require('../config/dbConnect')
var Schema = mongoose.Schema

guestSchema = new Schema({
    name: String,
    email : String,
    password: String,
    birth: String,
    role:{
        type:String,
        default:'guest'
    }
},{collection:'guest'});

var guestModel = mongoose.model('guest',guestSchema)

module.exports = guestModel

