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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/shiftTable", function (req, res) {
  const shiftTableUrl = "https://dutyapi.azurewebsites.net/shiftTable";
  request(shiftTableUrl, { json: true }, function (err, result, body) {
    if (err) {
      console.log("실패");
    } else {
      //console.log(body);
      //res.send(body);
      res.render("shiftTable", { emplist: body });
    }
  });
});

module.exports = app;
