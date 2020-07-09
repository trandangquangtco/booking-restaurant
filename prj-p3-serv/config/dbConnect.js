const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/prj-p3',{useNewUrlParser:true})

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('db connect');
})

module.exports = mongoose