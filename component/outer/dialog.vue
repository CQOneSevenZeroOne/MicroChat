<template>
	<div id="dialog">
		<div class="header">
		    <div class="side"><a href="#/totaltab/wechat"><i class="iconfont icon-zuojiantou"></i> 微信</a></div>
		    <p v-text="p"></p>
		    <div class="side"><i class="iconfont icon-wo"></i></div>
		</div>
		<div class="section">
			<p>12345</p>
		</div>
		<div class="footer">
			<input type="text" name="txt" v-model="val">
			<button type="button" @click="sendMess">发送</button>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	import "jquery.cookie";
	import io from "socket";
	var socket = io("http://localhost:12346");
	export default{
		data(){
			return {
				val:"123",
				p:"刘松"
			}
		},
		methods:{
			sendMess(){
				var _this = this;
				/*console.log(this.$store.state.myId);*/
				console.log(this.val);
				socket.emit("getSocketId",this.$store.state.friend);
				socket.on("giveSocketId",function(data){
					console.log(data);
					socket.emit("sendMess",{
						id:data,
						message:_this.val,
						user:_this.$store.state.myId
					})
				})
				/*socket.emit("sendMess",{
					id:_this.$store.state.myId,
					message:_this.val
				})*/
			}

		},
		mounted(){
			var _this = this;
			var myobj = JSON.parse($.cookie("user"));
			this.$store.state.myId = myobj.userId;
			this.p = myobj.userName;
			/*console.log(_this);*/
			socket.emit("adduser",myobj.userNum);
			socket.on("showlist",function(data){
				
				console.log(data);
				socket.emit("setSocketId",{
					socketId:data.id,
					userNum:data.userNum
				})
			})
			
			socket.on("returnMess",function(data){
				document.querySelector(".section").innerHTML+=(`<p><img src='${data.user}'/>${data.message}</p>`);
			})
		}
	}
</script>
<style scoped>
html,body{font-size: 62.5%;}
	#dialog{
		position: relative;
		height: 100%;

	}
	.header{
		  position:fixed;
		  top: 0;
		  line-height: 3rem;
		  text-align: center;
		  width: 100%;
		  background: linear-gradient(180deg, #303036, #3c3b40);
		  font-size: 1rem;
		  height: 3rem;
		  color: #fff;
		  display: flex;
		  justify-content: space-between;
	}
	.header a{
		color: #fff;
	}
	.side{
		padding: 0 10px;
	}
	.section{
		margin-top: 3rem;
		margin-bottom: 1px;
		background: #efeff4;
		min-height: 39rem;
	}
	.footer{
		position: fixed;
		bottom: 0;
		height: 3rem;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		padding: 0.25rem;
		border: 1px solid #7d7e83;
		background: #fff;
		line-height: 3rem;
	}
	.footer input{
		height: 2.4rem;
		box-sizing: border-box;
		border: 1px solid #7d7e83;
		width: 86%;
		outline: none;
	}
	.footer button{
		height: 2.4rem;
		width: 12%;
		border-radius: 5px;
		background: green;
		color: #fff;
		align-items: flex-end;
	}
</style>
