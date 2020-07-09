var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var orderService = require('../service/orderService');
var guestService = require('../service/guestService');

/* GET users listing. */
router.get('/getOrder'
   // , function (req, res, next) {
   //    try {
   //       let token = req.cookies.token
   //       let decode = jwt.verify(token, 'token')
   //       guestService.findIdAdmin(decode.id).then(data => {
   //          if (data) {
   //             next()
   //          } else {
   //             res.json('ko phai admin')
   //          }
   //       })
   //    } catch (error) {
   //       if (error.message == 'jwt must be provided') {
   //          res.json('ban chua dang nhap')
   //       }
   //    }
   // }
   , function (req, res, next) {
      orderService.getOrder().then(data => {
         res.json(data)
      })
   });

router.post('/order', function (req, res, next) {
   let name = req.body.name
   let amount = req.body.amount
   let gend = req.body.gend
   let time = req.body.time
   let pos = req.body.pos
   let date = req.body.date
   let food = req.body.food
   let idea = req.body.idea
   let ads = req.body.ads
   let seat = req.body.seat
   orderService.order(name, amount, gend, time, pos, date, food, idea, ads, seat).then(data => {
      res.json(data)
   })
});

router.delete('/delorder/:id', (req, res) => {
   let id = req.params.id
   console.log(id);
   orderService.delorder(id).then(data => {
      res.json('xoa thanh cong')
   })
});

module.exports = router;
