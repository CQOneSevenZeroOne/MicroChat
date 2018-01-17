import Vue from "vue";
import "weui";
import "./font/iconfont.css"; 
import "./font/iconfont1.css"; 
import "./template/base.css";
import "./template/common.css"
//路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//outer
import totaltab from './component/outer/totaltab.vue'
import dialogo from './component/outer/dialog.vue'
import fridetail from './component/outer/fridetail.vue'
import personalinfo from './component/outer/personalinfo.vue'
import setup from './component/outer/setup.vue'
import reglog from './component/outer/reglog.vue'
import addfriend from './component/outer/addfriend.vue'
import search from './component/outer/search.vue'
import login from './component/outer/login.vue'
import register from './component/outer/register.vue'
//tabchildren
import wechat from './component/tabchildren/wechat.vue'
import maillist from './component/tabchildren/maillist.vue'
import discover from './component/tabchildren/discover.vue'
import mine from './component/tabchildren/mine.vue'

//引用个人信息的模块
import setheadimg from "./component/personalinfo/setheadimg.vue"
import main from "./component/personalinfo/main.vue"
import setname from "./component/personalinfo/setname.vue"
import qrcode from "./component/personalinfo/qrcode.vue"
import infomore from "./component/personalinfo/infomore.vue"
import myplace from "./component/personalinfo/myplace.vue"





//状态管理
import Vuex from 'vuex';
Vue.use(Vuex);

var router=new VueRouter({
    routes:[{
        path:"/totaltab",
        component:totaltab,
        children:[{
            path:'wechat',
            component:wechat
        },{
            path:'maillist',
            component:maillist
        },{
            path:'discover',
            component:discover
        },{
            path:'mine',
            component:mine
        }]
    },{
        path:"/dialogo",
        component:dialogo
    },
    {
        path:"/reglog",
        component:reglog
    },
    {
        path:"/login",
        component:login
    },
    {
        path:"/register",
        component:register
    },
    {
        path:"/setup",
        component:setup
    },
    {
        path:"/fridetail",
        component:fridetail
    },
    {
        path:"/personalinfo",
        component:personalinfo,
        //从这儿开始添加子元素
        children:[{
            path:"setheadimg",
            component:setheadimg
        },{
            path:"/",
            redirect:"main"
        },{
            path:"main",
            component:main
        },{
            path:"setname",
            component:setname
        },{
            path:"qrcode",
            component:qrcode
        },{
            path:"infomore",
            component:infomore
        },{
            path:"myplace",
            component:myplace
        }]
    },
    {
        path:"/addfriend",
        component:addfriend
    },
    {
        path:"/search",
        component:search
    },
     // 默认进入页面的时候跳转到
    {
        path: '/',
        redirect: '/reglog'
    }]
})

//配置状态
var store= new Vuex.Store({
    state:{
        bool:true,
        title:"标题"
    }
})

new Vue({
    el:"#app",
    template:`
        <div class="abc">
            <router-view></router-view>
        </div> 
    `,
    router,
    store
})