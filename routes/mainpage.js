const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const router = express.Router();
var session=require('express-session');

  /**
 * 파일 명 : superMain.js
 * @author : 문승연
 * @date : 2022-04-05
 * @description :
*/



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));



const superAdminUrl = 'http://localhost:5000/superMain';
const dutyAdminUrl = 'http://localhost:5000/dutyMain';
const normalUrl = 'http://localhost:5000/normalMain';


router.get('/superadm', function(req, res, next){
      res.render('superMain', {
    isLogined: true, 
    empName: req.session.empName, 
    authCode: req.session.authCode,
    empNo: req.session.empNo
  });
  });


// router.get('/empManage', function(req, res, next){
//   request("https://dutyapi.azurewebsites.net/api/emp/total", function(error, response, body){
//     if(error){
//       console.log(error)
//     }
//     var obj = JSON.parse(body)
//       res.render('empManage', {
//     emps:obj,
//     isLogined: true, 
//     empName: req.session.empName, 
//     authCode: req.session.authCode,
//     empNo: req.session.empNo
//   })
//   })

// })


router.get('/empManage', function(req, res, next){
  request("http://localhost:5000/api/emp/total", function(error, response, body){
    if(error){
      console.log(error)
    }
    var obj = JSON.parse(body)
      res.render('empManage', {
    emps:obj,
    isLogined: true, 
    empName: req.session.empName, 
    authCode: req.session.authCode,
    empNo: req.session.empNo
  })
  })

})


// router.get('/', function(req, res, next) {
//     request(superAdminUrl, function(err,res){
//       { withCredentials: true }
//     });res.render('superMain');
//   });


router.get('/dutyadm', function(req, res, next){
    request(dutyAdminUrl,function(err,res){
    });
    res.render('dutyMain',{
      isLogined: true, 
      empName: req.session.empName, 
      authCode: req.session.authCode,
      empNo: req.session.empNo
    });
});

router.get('/normal', function(req, res, next){
    request(normalUrl,function(err,res){
    });
    res.render('normalMain',{
      isLogined: true, 
      empName: req.session.empName, 
      authCode: req.session.authCode,
      empNo: req.session.empNo
    });
});


module.exports = router;