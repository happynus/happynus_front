const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
const router = express.Router();
var session = require("express-session");
const { connection } = require("../config/dao.js");

/**
 * 파일 명 : superMain.js
 * @author : 문승연
 * @date : 2022-04-05
 * @description :
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const superMainUrl = "http://localhost:5000/superMain";
const dutyAdminUrl = "http://localhost:5000/dutyMain";
const normalUrl = "http://localhost:5000/normalMain";
const normalMainDutyCheck = "http://localhost:5000/normalMainDutyCheck";
const teamDutyCheck = "http://localhost:5000/teamDutyCheck"
//const checkCoworker = "https://dutyapi.azurewebsites.net/api/emp/coworkers";


// 슈퍼관리자 권한 페이지
router.get("/superMain", function (req, res, next) {
  const shiftTableUrl = "http://localhost:5000/shiftTable";
  request(shiftTableUrl, { json: true }, function (err, result, body) {
    if (err) {
      console.log("실패");
    } else {
      //console.log(body);
      //res.send(body);
      res.render("superMain", {
        isLogined: true,
        emplist: body,
        empName: req.session.empName,
        authCode: req.session.authCode,
        empNo: req.session.empNo,
        teamNo: req.session.teamNo,
      });
    }
  });
});

router.get("/empManage", function (req, res, next) {
  request(
    "https://dutyapi.azurewebsites.net/api/emp/total",
    function (error, response, body) {
      if (error) {
        console.log(error);
      }
      var obj = JSON.parse(body);
      res.render("empManage", {
        emps: obj,
        isLogined: true,
        empName: req.session.empName,
        authCode: req.session.authCode,
        empNo: req.session.empNo,
      });
    }
  );
});


// 듀티관리자 권한 페이지
router.get("/dutyMain", function (req, res, next) {
  //request(dutyAdminUrl, function (err, res) {});
  res.render("dutyMain", {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
  });
});

// 듀티배치를 할 수 있는 shiftTable이 여기로 넘어옴
router.get("/teamDutyAdmin", function (req, res, next) {
  const shiftTableUrl = "http://localhost:5000/shiftTable";
  request(shiftTableUrl, { json: true }, function (err, result, body) {
    if (err) {
      console.log("실패");
    } else {
      //console.log(body);
      //res.send(body);
      res.render("teamDutyAdmin", {
        isLogined: true,
        emplist: body,
        empName: req.session.empName,
        authCode: req.session.authCode,
        empNo: req.session.empNo,
        teamNo: req.session.teamNo,
      });
    }
  });
});

router.get("/teamDutyCheck", function (req, res, next) {
  const shiftTableUrl = "http://localhost:5000/shiftTable";
  request(shiftTableUrl, { json: true }, function (err, result, body) {
    if (err) {
      console.log("실패");
    } else {
      //console.log(body);
      //res.send(body);
      res.render("teamDutyCheck", {
        isLogined: true,
        emplist: body,
        empName: req.session.empName,
        authCode: req.session.authCode,
        empNo: req.session.empNo,
        teamNo: req.session.teamNo,
      });
    }
  });
});


// 일반근무자 권한 페이지
router.get("/normalMain", function (req, res, next) {
  request(checkCoworker, function (err, response, body) {
    if (err) throw err;
    var obj = body;
    console.log("바디", body);
    res.render("normalMain", {
      coworker: obj,
      isLogined: true,
      empNo: req.session.empNo,
      empName: req.session.empName,
    });
  });
});

router.get("/normalMainDutyCK", function (req, res, next) {
  //request(normalMainDutyCheck, function (err, res) {});
  res.render("normalMainDutyCK", {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
  });
});

module.exports = router;
