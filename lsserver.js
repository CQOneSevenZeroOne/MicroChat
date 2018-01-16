var app = require("express")();
var mysql = require("mysql");
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var userlist = [];
var connection = mysql.createConnection({
	host:"10.40.153.231",
	user:"liusong",
	password:"123456",
	database:"wechat"
});
connection.connect();

app.get("/getfri",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
})
io.on("connection",function(socket){
	console.log(socket.id);
	socket.on("adduser",function(user){
		userlist.push({
			name:user,
			id:socket.id
		})
		io.emit("showlist",userlist);
	})
	socket.on("sendMess",function(data){
		console.log(data);
		io.sockets.sockets[data.id].emit("returnMess",{
			message:data.message
		})
	})
})

server.listen(12346);
console.log("开启服务器");