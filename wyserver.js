var express = require("express");
var mysql = require("mysql");
var url = require("url");
var multer = require ("multer");
var querystring  = require("querystring");
//实例化express
var app = express();
app.use(express.static('../img'));
var connection = mysql.createConnection({
		host:"10.40.153.231",
		user:"wy",
		password:"123456",
		database:"wechat"
	});
connection.connect();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login/num', function(req, res) {
	res.append("Access-Control-Allow-Origin","*");
	//console.log(req.body)
	var sql=`SELECT * FROM userinfo where userNum='${req.body.username}'`;
    connection.query(sql, function (error, results, fields) {   
		res.send(results);
    });
});
app.post('/login/phone', function(req, res) {
	res.append("Access-Control-Allow-Origin","*");
	var sql=`SELECT * FROM userinfo where userPhone='${req.body.username}'`;
    connection.query(sql, function (error, results, fields) {  
		res.send(results);
    });
});
app.post('/userreg', function(req, res) {
	res.append("Access-Control-Allow-Origin","*");
	var sql=`INSERT INTO userinfo (userName, userPass,userGender,userPhone,userImg) VALUES ('${req.body.username}',${req.body.userpass},'${req.body.usergender}','${req.body.userphone}','http://10.40.153.231:88/project/ShopOASystem/src/public/${req.body.userimg}')`;
    connection.query(sql, function (error, results, fields) {  
		res.send(results);
    });
});

var storage = multer.diskStorage({
	//存储文件地方
	destination:function(req,res,cb){
		cb(null,"img");
	},
	//存储文件名字
	filename: function (req, file, cb) {
        var fileFormat = file.originalname.split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1])
    }
})
//配置上传参数
var upload = multer({
	storage:storage
})
app.post("/uploadimg",upload.any(),function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	if(req.files.length==0){
		res.send('');
	}else{
		res.send(req.files[0].filename);
	}
})
app.listen(1701);
