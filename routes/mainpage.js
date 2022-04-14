const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const router = express.Router();
var session=require('express-session');
const {connection} = require("../config/dao.js");

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
  request("https://dutyapi-dutyapi-test.azurewebsites.net/api/emp/total", function(error, response, body){
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


// select month, date, empno, shiftCode from currentdutytest where date= ? and shiftCode='/';
// => 당일 오프자

// select month, date, empno, shiftCode from currentdutytest where date=? and
// shiftCode=(select shiftCode from currentdutytest where empno=? and date=?) and empno not in (?);
// => 사번 공동근무자


// router.get("/", function (req, res){
// 	var todayOff = "select empNo, shiftCode from currentdutytest where date= ? and shiftCode='/'";
// 	var myDate = req.body.date
  
// 	connection.query(todayOff, myDate, function(err, result){
// 	  for (var data of result){
// 		console.log(data)
// 	  }
// 	})
//   });



module.exports = router;