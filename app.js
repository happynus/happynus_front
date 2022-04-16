const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
//var cookieParser = require('cookie-parser');
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("views", "./views");
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname + "/public")));

// 세션 설정
app.use(
  session({
    key: "hnduty",
    secret: "nextlevel",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({
      host: "mysql-hnduty.mysql.database.azure.com",
      port: "3306",
      user: "hnadmin",
      password: "hn!753159",
      database: "session",
    }),
  })
);

//Route_zone
var level = require("./routes/level.js");
app.use("/level", level);

var login = require("./routes/login.js");
app.use("/", login);

var logout = require("./routes/logout.js");
app.use("/", logout);

//여러가지 MainPage들을 모아논 API
var mainpage = require("./routes/mainpage.js");
app.use("/", mainpage);

// var normalMain = require("./routes/mainpage.js");
// app.use("/", normalMain);

var wanted = require("./routes/wanted.js");
app.use("/", wanted);


//여러 버전의 시프트 테이블 모아놓은 곳
var shiftTable = require("./routes/shiftTable.js");
app.use("/", shiftTable);


app.listen(app.get("port"), () => {
  console.log("프론트 서버 시작!");
});
