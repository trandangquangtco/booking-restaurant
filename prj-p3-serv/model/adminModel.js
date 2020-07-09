var mongoose = require('../config/dbConnect');
var Schema = mongoose.Schema

var adminSchema = new Schema({
    account: String,
    password: String,
    role:{
        type:String,
        default:'admin'
    }
},{collection:'admin'});

var adminModel = mongoose.model('admin',adminSchema);

module.exports = adminModel;