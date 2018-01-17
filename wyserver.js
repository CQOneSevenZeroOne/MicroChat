var express = require("express");
var mysql = require("mysql");
var url = require("url");
var multer = require ("multer");
var querystring  = require("querystring");
var server = require("http").createServer(app);
var io = require("socket.io")(server);
//实例化express
var app = express();
app.use(express.static('../userlogo'));
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
app.post('/userreg/isin', function(req, res) {
	res.append("Access-Control-Allow-Origin","*");
	var sql=`SELECT userNum,userPhone FROM userinfo`;
    connection.query(sql, function (error, results, fields) {  
		res.send(results);
    });
});
app.post('/userreg', function(req, res) {
	res.append("Access-Control-Allow-Origin","*");
	var sql=`INSERT INTO userinfo (userNum,userName,userPass,userGender,userPhone,userImg) VALUES ('${req.body.username}','${req.body.usernick}',${req.body.userpass},'${req.body.usergender}','${req.body.userphone}','http://10.40.153.231:88/wechat/userlogo/${req.body.userimg}')`;
    connection.query(sql, function (error, results, fields) {  
		if(error) throw error;
		res.send("1");
    });
});

var storage = multer.diskStorage({
	//存储文件地方
	destination:function(req,res,cb){
		cb(null,"userlogo");
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
console.log("开启服务器");
