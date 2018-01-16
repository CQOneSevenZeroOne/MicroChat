var express = require("express");
var mysql = require("mysql");

//实例化express
var app = express();
//post请求体模块
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./img'));
var connection = mysql.createConnection({
		host:"10.40.153.231",
		user:"jian",
		password:"123456",
		database:"wechat"
	});
connection.connect();

//查询朋友
app.get("/findfriend",function(req,res){
    res.append("Access-Control-Allow-Origin","*");
     let sql =`select userId,userName,userAddress,userImg from userinfo where userPhone = '${req.query.findvalue}' or userNum='${req.query.findvalue}'`;
     connection.query(sql,function(error,results,fields){
                if (error) throw error;
                res.send(JSON.stringify(results));
        })
})

//添加朋友
app.post("/addfriend",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
    //req.body是post传输的数据
    var time = new Date();
    var timestring = ""+time.getFullYear()+time.getMonth()+time.getDate()+time.getHours()+time.getMinutes()+time.getSeconds()+"";    
	var sql=`insert into friends values (NULL,${req.body.userId},${req.body.friId},'${req.body.remark}',0,${timestring}),(NULL,${req.body.friId},${req.body.userId},'${req.body.userName}',1,${timestring})`;
	 connection.query(sql,function(error,results,fields){
            if (error) throw error;
            res.send("success");
            
    })
})
//查询是否已发送申请
app.post("/checkfriend",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
    //req.body是post传输的数据
    console.log(req.body);
	var sql=`select accstatus from friends where userId=${req.body.userId} and friId=${req.body.friId}`;
	 connection.query(sql,function(error,results,fields){
            if (error) throw error;
            res.send(JSON.stringify(results));
            
    })
})
//查询朋友表中的数据
app.get("/findall",function(req,res){
    res.append("Access-Control-Allow-Origin","*");
     let sql =`SELECT b.friId,a.userImg,b.remark,b.accstatus FROM friends as b,userinfo as a WHERE a.userId=b.friId and b.userId=${req.query.userId} and b.accstatus!=0`;
     connection.query(sql,function(error,results,fields){
            if (error) throw error;
            res.send(JSON.stringify(results));
    })
})


//修改朋友表中的状态(当已发送过了)
app.post("/updatestatus",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
    //req.body是post传输的数据
    var time = new Date();
    var timestring = ""+time.getFullYear()+time.getMonth()+time.getDate()+time.getHours()+time.getMinutes()+time.getSeconds()+"";    
    var sql=`update friends set addTime=${timestring} where friId=${req.body.userId} and userId=${req.body.friId}`;
	 connection.query(sql,function(error,results,fields){
            if (error) throw error;
            res.send("success");
            
    })
})
//修改朋友表中的状态（朋友邀请了）
app.post("/updatestatus1",function(req,res){
	res.append("Access-Control-Allow-Origin","*");
    //req.body是post传输的数据
    var time = new Date();
    var timestring = ""+time.getFullYear()+time.getMonth()+time.getDate()+time.getHours()+time.getMinutes()+time.getSeconds()+"";    
    var sql=`update friends set remark='${req.body.remark}' where userId=${req.body.userId} and friId=${req.body.friId}`;
	 connection.query(sql,function(error,results,fields){
            if (error) throw error; 
    })
    var sql=`update friends set addTime=${timestring},accstatus=1 where friId=${req.body.userId} and userId=${req.body.friId}`;
	 connection.query(sql,function(error,results,fields){
            if (error) throw error;   
    })
})
app.listen(1701);
console.log("开启服务器");
