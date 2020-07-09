var orderModel = require('../model/orderModel');

function order(name,amount,gend,time,pos,date,food,idea,ads,seat){
    return orderModel.create({
    name:name,
    amount:amount,
    gend:gend,
    time:time,
    pos:pos,
    date:date,
    food:food,
    idea:idea,
    ads:ads,
    seat:seat
    })
};

function delorder(id){
    return orderModel.deleteOne({
        _id:id
    })
};

function getOrder(){
    return orderModel.find()
};

module.exports = {
    order,
    delorder,
    getOrder,
};