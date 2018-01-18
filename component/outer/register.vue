<template>
  <div id="regbg">
      <header>
          <a href="#/reglog"><b class="iconfont icon-zuojiantou"></b></a>
          <i>|</i>
          <span v-text="span[0]"></span>
      </header>
      <form name="regform" id="userreg">
            <div class="mydetailinfo">
                <span v-text="span[1]"></span><input type="text" v-model="username" @blur="namenoshow" @focus="namenshow">
                <i class="clearcon clearconfir" @click="clearconname" v-show="nameisdel">×</i>
                <em class="messshow" :style="{display:namemessshow?'block':'none'}">用户名已存在</em>
            </div>
            <div class="mydetailinfo">
                <span v-text="span[2]"></span> <input class="sex" type="radio" value="0" name="gender" checked v-model="usergender"><i>男</i><input class="sex" v-model="usergender" type="radio" value="1" name="gender"><i>女</i>
            </div>
            <div class="mydetailinfo">
                <span v-text="span[3]"></span><input type="text" v-model="userphone" @blur="numnoshow" @focus="numnshow">
                <i class="clearcon" @click="clearconphone" v-show="numisdel">×</i>
                <em class="messshow" :style="{display:passmessshow?'block':'none'}">号码已存在</em>
            </div>
            <div class="mydetailinfo">
                <span v-text="span[4]"></span><input type="password" v-model="userpass" @blur="passnoshow" @focus="passnshow">
                <i class="clearcon" @click="clearconpass" v-show="passisdel">×</i>
                <em class="messshow" :style="{display:passmessshow?'block':'none'}">密码格式错误</em>
            </div>
            <div class="mydetailinfo">
                <a ><span v-text="span[5]" @click="userreg"></span></a>
            </div>
            <div class="mydetailinfo">
                <p>点击上面的注册按钮，即表示你同意<a>《腾讯微信软件许可及服务协议》</a>和<a>《微信隐私保护指引》</a></p>
            </div>
            <div class="picture" @click="showimg">
                <div class="weui-uploader__input-box">
                        <input id="uploaderInput" name="userlogo" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                </div>
            </div>
            <div class="picture">
                <img class="weui-uploader__file" :src="str" alt="  "/>
            </div>
      </form>
  </div>
</template>
<script>
import $ from "jquery";
var src=[];
function upload(){
		$.ajax({
		url:"http://localhost:1701/uploadimg",
		type:"POST",
		async:false,
		processData:false,
        contentType:false,
        cache:false,
        data:new FormData($("#userreg")[0]),
        success:function(data){
            src.push(data);
            console.log(data)
        }
	});
	return src;
}
export default {
  data(){
      return {
          span:["新用户注册","昵称","性别","手机号","密码","注册"],
          username:'',
          usergender:"",
          userphone:"",
          userpass:"",
          namemessshow:false,
          passmessshow:false,
          isReg:false,
          isclear:false,
          nameisdel:false,
          passisdel:false,
          numisdel:false,
          str:""
      }
  },
  methods:{
    clearconname(){
      this.username="";
    },
    clearconpass(){
      this.userpass="";
    },
    clearconphone(){
        this.userphone="";
    },
    namenshow(){
      this.nameisdel=true;
    },
    namenoshow(){
      this.nameisdel=false;
    },
    passnshow(){
      this.passisdel=true;
    },
    passnoshow(){
      this.passisdel=false;
    },
    numnshow(){
      this.numisdel=true;
    },
    numnoshow(){
      this.numisdel=false;
    },
    userreg(){
          if(this.username && this.userpass && this.usergender && this.userphone && this.userpass){
              var self=this;
              var path=upload();
              if(path[0]==''){
                this.str='User.jpg';
              }else{
                this.str=path[0];
              }
              console.log(this.str)
          }else{
              console.log("kkkkkk")
          }
      }
  }
}
</script>
<style scoped>
html,body{width:100%;height:100%;}
*{margin:0;padding:0;}
#regbg{background: #FFFFFF;width:100%;height:100%;}
a{text-decoration: none;display: block;}
i{font-style: normal;}
input{border:0;outline: none;background: #FFFFFF;}
#regbg header{
    background: #393A3F;
    height:7%;
    font-size: 16px;
    color:white;
}
#regbg header a{color: white;}
#regbg header a,#regbg header i,#regbg header span{margin-left:5%;float:left;display: block;height:100%;line-height: 50px;}
#regbg header i{color:#2B2C31;width:2px;}
.regform{overflow: hidden;position: relative;}
.mydetailinfo{position:relative;margin:0 4%;height:10%;width:auto;font-size: 18px;line-height: 100%;border-bottom: 1px solid #D8D8D8;overflow: hidden;}
.mydetailinfo  span,.mydetailinfo input,.mydetailinfo i{display:block;float: left;line-height: 70px;}
.mydetailinfo input,.mydetailinfo i{margin-left: 32px;font-size: 20px;}
.mydetailinfo:nth-of-type(1){border-bottom-color: #51C326;}
.mydetailinfo:nth-of-type(5){border:0;overflow: hidden;margin-top:5%;}
.mydetailinfo:nth-of-type(5) span{color: white;width: 100%;text-align: center;background: #51C326;}
.mydetailinfo:nth-last-of-type(2) i{line-height: 70px;}
.mydetailinfo:nth-of-type(6){border:0;}
.mydetailinfo:nth-of-type(6) p{font-size: 14px;color:#989898;}
.mydetailinfo:nth-of-type(6) p a{text-decoration: underline;display: inline;font-size: 14px;line-height: 24px;color: #5C637D;}
.picture{position:absolute;left:79%;;top:7%;width:67px;height:67px;}
.weui-uploader__input-box{width:100%;height: 100%;border:0;}
.picture:nth-of-type(2){border:0;}
.picture img{width: 100%;height:100%;text-align: center;font-size: 12px;line-height: 67px;}
.messshow{position: absolute;;color:red;font-style: normal;font-size: 12px;left:60%;top:38%;}
.mydetailinfo .clearcon{position: absolute;;color:grey;font-style: normal;font-size: 12px;left:70%;top:38%;background: rgba(0, 0, 0, 0.2);
border-radius: 50%;width:18px;height:18px;text-align: center;line-height: 16px;}
.mydetailinfo .clearconfir{left:45%;}
.sex{margin-top:9%;}
</style>


