var express = require('express')
var router = express.Router()
var guestService = require('../service/guestService');
var jwt = require('jsonwebtoken');
var path = require('path')

router.post('/admin',function(req,res){
    let account = req.body.account
    let password = req.body.password
    guestService.admin(account,password).then(data=>{
      res.json(data)
    })
});

router.post('/signup',function(req,res){
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let birth = req.body.birth
    guestService.signup(name,email,password,birth).then(function(data){
        res.json(data)
    })
});
router.get('/guest-login',(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/login.html"))
});
router.post('/guest-login',function(req,res,next){
    let email = req.body.email
    let password = req.body.password
    guestService.guestLogin(email,password).then(data=>{
        if(data.length>0){
            let id = data[0]._id
            let token = jwt.sign({id},'token',{expiresIn:'1d'})
            res.cookie('guesttoken',token)
            res.json({data,token:token})
        }else{
            res.json({
                error:false,
            })
        }
    })
});

router.post('/admin-login',function(req,res){
    let account = req.body.account
    let password = req.body.password
    guestService.adminLogin(account,password).then(data=>{
        if(data){
            let id = data._id
            let token = jwt.sign({id},'token',{expiresIn:'1d'})
            res.cookie('token',token)
            res.json({data,token})
        }else{
            res.json({
                error:false,
            })
        }
    })
});

router.put('/changeGuest/:id',function(req,res){
    let id = req.params.id
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let birth = req.body.birth
    guestService.changeGuest(id,name,email,password,birth).then(function(data){
        res.json(data)
    })
});

router.get('/getGuest',function(req,res,next){
    try {
        let token = req.cookies.token
        let decode = jwt.verify(token,'token')
        guestService.findIdAdmin(decode.id).then(data=>{
            if(data){
                next()
            }else{
                res.json('ko phai admin')
            }
        })
    } catch (error) {
        if (error.message == 'jwt must be provided') {
            res.json('ban chua dang nhap')
        }
    }
}
,function(req,res){
    guestService.guestAll().then(data=>{
        res.json(data)
    })
})

router.get('/guestProfile'
,(req,res,next)=>{
    try {
        // let token1 = req.headers.split(' ')[1]
        let token = req.headers.token
        console.log(token);
        let decode = jwt.verify(token,'token')
        console.log(decode);
        guestService.guestId(decode.id).then(data=>{
            if(data){
                next()
            }else{
                res.json('dang nhap sai')
            }
        })
    } catch (error) {
        if (error.message == 'jwt must be provided') {
            res.json('ban chua dang nhap')
        }
    }
}
,function(req,res){
    let token = req.cookies.guesttoken
    let decode = jwt.verify(token,'token')
    guestService.guestId(decode.id).then(data=>{
        res.json(data)
    })
})

router.get('/user',(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/profile.html"))
})

module.exports = router