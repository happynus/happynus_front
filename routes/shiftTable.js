const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
const router = express.Router();
var session = require("express-session");
const { connection } = require("../config/dao.js");

/**
 * 파일 명 : shiftTable.js
 * @author : 주민지
 * @date : 2022-04-16
 * @description : shiftTable 프론트
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const shiftTableUrl = "http://localhost:5000/shiftTable";

// app.get("", function (req, res) {
//   const shiftTableUrl = "http://localhost:5000/shiftTable";
//   request(shiftTableUrl, { json: true }, function (err, result, body) {
//     if (err) {
//       console.log("실패");
//     } else {
//       res.render("shiftTable", {
//         emplist: body,
//         teamNo: req.session.teamNo });
//     }
//   });
// });


router.get("/shiftTable", function (req, res, next) {
  request(
    shiftTableUrl, {json: true},
    function (error, response, body) {
      if (error) {
        console.log(error);
      }
      res.render("shiftTable", {
        emplist: body,
        isLogined: true,
        empName: req.session.empName,
        teamNo:req.session.teamNo,
        authCode: req.session.authCode,
        empNo: req.session.empNo
      });
      console.log(emplist, teamNo, empName)
    }
  );
});


// app.get("/myWantedTable", function (req, res) {
//   const shiftTableUrl = "http://localhost:5000/myDutyTable";
//   request(shiftTableUrl, { json: true }, function (err, result, body) {
//     if (err) {
//       console.log("실패");
//     } else {
//       res.render("myWantedTable", { 
//         emplist: body,
//       empNo: req.session.empNo});
//     }
//   });
// });

module.exports = router;
