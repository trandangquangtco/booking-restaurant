var guestModel = require('../model/guestModel');
var adminModel = require('../model/adminModel');

function admin(account,password){
    return adminModel.create({
        account:account,
        password:password
    })
};

function signup(name,email,password,birth){
    return guestModel.create({
        name:name,
        email:email,
        password:password,
        birth:birth
    })
};

function changeGuest(id,name,password,birth){
    return guestModel.updateOne({
        _id:id
    },{
        name:name,
        password:password,
        birth:birth
    })
};

function guestLogin(email,password){
    return guestModel.find({
        email:email,
        password:password
    })
};

function adminLogin(account,password){
    return adminModel.findOne({
        account:account,
        password:password
    })
};

function guestAll(){
    return guestModel.find()
};

function findIdAdmin(id){
    return adminModel.findOne({
        _id:id
    })
}

function guestId(id){
    return guestModel.findOne({
        _id:id
    })
}

module.exports = {
    admin,
    signup,
    changeGuest,
    guestLogin,
    adminLogin,
    guestAll,
    findIdAdmin,
    guestId
}