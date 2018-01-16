<template>
	<div id="dialog">
		<div class="header">
		    <div class="side"><a href="#/totaltab/wechat"><i class="iconfont icon-zuojiantou"></i> 微信</a></div>
		    <p>刘松</p>
		    <div class="side"><i class="iconfont icon-wo"></i></div>
		</div>
		<div class="section"></div>
		<div class="footer">
			<div>yuyin</div>
			<input type="text" name="txt" v-model="val">
			<button type="button">发送</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				val:"",
			}
		}
	}
</script>
<style scoped>
html,body{font-size: 62.5%;}
	#dialog{
		position: relative;
		height: 100%;
		background: #ccc;
	}
	.header{
		  position:fixed;
		  top: 0;
		  line-height: 3rem;
		  text-align: center;
		  width: 100%;
		  background: linear-gradient(180deg, #303036, #3c3b40);
		  font-size: 19px;
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
	.footer{
		position: fixed;
		bottom: 0;
		height: 3rem;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		padding: 5px;
		border: 1px solid #7d7e83;
	}
	.footer input{
		height: 2.5rem;
		box-sizing: border-box;
	}
</style>