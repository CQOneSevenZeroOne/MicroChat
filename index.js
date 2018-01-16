import Vue from "vue";
import "weui";
import "./font/iconfont.css"; 
import "./template/base.css";
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
        component:personalinfo
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
        <div>
            <router-view></router-view>
        </div> 
    `,
    router,
    store
})