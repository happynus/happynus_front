const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const router = express.Router();
var session=require('express-session');

  /**
 * 파일 명 : level.js
 * @author : 문승연
 * @date : 2022-04-05
 * @description :
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


const url = 'https://dutyapi.azurewebsites.net/api/emp/level';

router.get('/', function(req, res, next){
    request(url,function(err,res){
        console.log("출력확인");
    });
    res.send("레벨 확인 필요");
});


module.exports = router;