<template>
  <div id="regbg">
      <header>
          <a href="#/reglog"><b class="iconfont icon-zuojiantou"></b></a>
          <i>|</i>
          <span>填写手机号</span>
      </header>
      <div class="mydetailinfo">
          <span>昵称</span><input type="text">
      </div>
      <div class="mydetailinfo">
          <span>性别</span> <input type="radio" value="0" name="gender"><i>男</i><input type="radio" value="1" name="gender"><i>女</i>
      </div>
      <div class="mydetailinfo">
          <span>手机号</span><input type="text">
      </div>
      <div class="mydetailinfo">
          <span>密码</span><input type="password">
      </div>
      <div class="mydetailinfo">
          <span>注册</span>
      </div>
      <div class="mydetailinfo">
          <p>点击上面的注册按钮，即表示你同意<a>《腾讯微信软件许可及服务协议》</a>和<a>《微信隐私保护指引》</a></p>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scope>
html,body,div{width:100%;height:100%;}
*{margin:0;padding:0;}
a{text-decoration: none;display: block;}
i{font-style: normal;}
input{border:0;outline: none;}
#regbg header{
    background: #393A3F;
    height:7%;
    font-size: 16px;
    color:white;
}
#regbg header a{color: white;}
#regbg header a,#regbg header i,#regbg header span{margin-left:5%;float:left;display: block;height:100%;line-height: 50px;}
#regbg header i{color:#2B2C31;width:2px;}
.mydetailinfo{margin:0 4%;height:10%;width:auto;font-size: 18px;line-height: 100%;border-bottom: 1px solid #D8D8D8;overflow: hidden;}
.mydetailinfo  span,.mydetailinfo input,.mydetailinfo i{display:block;float: left;line-height: 70px;height:99%;}
.mydetailinfo input,.mydetailinfo i{margin-left: 32px;font-size: 20px;}
.mydetailinfo:nth-of-type(1){border-bottom-color: #51C326;}
.mydetailinfo:nth-of-type(5){border:0;overflow: hidden;margin-top:5%;}
.mydetailinfo:nth-of-type(5) span{color: white;width: 100%;text-align: center;background: #51C326;}
.mydetailinfo:nth-last-of-type(2) i{line-height: 70px;}
.mydetailinfo:nth-of-type(6) p{font-size: 12px;color:#989898;}
.mydetailinfo:nth-of-type(6) p a{text-decoration: underline;display: inline;}
</style>


