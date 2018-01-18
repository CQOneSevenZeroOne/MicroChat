<template>
  <div>
    <section class="app-content" style="" _v-c8294afa="">
        <div class="_full_inner _effect component-me" _v-4f0a3ae7="">
            <div class="weui_cells weui_cells_access me-line" _v-4f0a3ae7="">
                <a class="weui_cell" href="#/personalinfo" _v-4f0a3ae7="">
                    <div class="weui_cell_hd" _v-4f0a3ae7="">
                        <img :src="obj.userImg" _v-4f0a3ae7="" width="60px"> </div>
                    <div class="weui_cell_bd weui_cell_primary" _v-4f0a3ae7="">
                        <p _v-4f0a3ae7="" v-text="obj.userName"></p>
                        <p _v-4f0a3ae7="">
                            <span _v-4f0a3ae7="">微信号:&nbsp;&nbsp;</span>
                            <span _v-4f0a3ae7="" v-text="obj.userNum">yangtao_0215</span>
                        </p>
                    </div>
                    <div class="weui_cell_ft" _v-4f0a3ae7="">
                        <img class="_align-middle" style="height:25px" src="../../img/personinfo/chat-info-qr.0838167.png" _v-4f0a3ae7=""> </div>
                </a>
            </div>
            <div class="weui_cells weui_cells_access" _v-4f0a3ae7="">
                <a class="weui_cell" href="javascript:;" _v-4f0a3ae7="">
                    <div class="weui_cell_hd" _v-4f0a3ae7="">
                        <img src="../../img/personinfo/me_more-my-album.6bdfdae.png" alt="" style="width:20px;margin-right:5px;display:block"
                            _v-4f0a3ae7="">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" _v-4f0a3ae7="">
                        <p _v-4f0a3ae7="">相册</p>
                    </div>
                    <div class="weui_cell_ft" _v-4f0a3ae7=""></div>
                </a>
                <a class="weui_cell" href="javascript:;" _v-4f0a3ae7="">
                    <div class="weui_cell_hd" _v-4f0a3ae7="">
                        <img src="../../img/personinfo/me_more-my-favorites.a6978b3.png" alt="" style="width:20px;margin-right:5px;display:block"
                            _v-4f0a3ae7="">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" _v-4f0a3ae7="">
                        <p _v-4f0a3ae7="">收藏</p>
                    </div>
                    <div class="weui_cell_ft" _v-4f0a3ae7=""></div>
                </a>
                <a class="weui_cell" href="javascript:;" _v-4f0a3ae7="">
                    <div class="weui_cell_hd" _v-4f0a3ae7="">
                        <img src="../../img/personinfo/me_more-my-bank-card.cd4457b.png" alt="" style="width:20px;margin-right:5px;display:block"
                            _v-4f0a3ae7="">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" _v-4f0a3ae7="">
                        <p _v-4f0a3ae7="">钱包</p>
                    </div>
                    <div class="weui_cell_ft" _v-4f0a3ae7=""></div>
                </a>
                <a class="weui_cell" href="javascript:;" _v-4f0a3ae7="">
                    <div class="weui_cell_hd" _v-4f0a3ae7="">
                        <img src="../../img/personinfo/me_my-card-package-icon.4024a10.png" alt="" style="width:20px;margin-right:5px;display:block"
                            _v-4f0a3ae7="">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" _v-4f0a3ae7="">
                        <p _v-4f0a3ae7="">卡包</p>
                    </div>
                    <div class="weui_cell_ft" _v-4f0a3ae7=""></div>
                </a>
            </div>
            <div class="weui_cells weui_cells_access" _v-4f0a3ae7="">
                <a class="weui_cell" href="javascript:;" _v-4f0a3ae7="">
                    <div class="weui_cell_hd" _v-4f0a3ae7="">
                        <img src="../../img/personinfo/me_more-expression.1696ccf.png" alt="" style="width:20px;margin-right:5px;display:block"
                            _v-4f0a3ae7="">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" _v-4f0a3ae7="">
                        <p _v-4f0a3ae7="">表情</p>
                    </div>
                    <div class="weui_cell_ft" _v-4f0a3ae7=""></div>
                </a>
            </div>
            <div class="weui_cells weui_cells_access" _v-4f0a3ae7="">
                <a class="weui_cell" href="javascript:;" _v-4f0a3ae7="" @click="IsQuit">
                    <div class="weui_cell_hd" _v-4f0a3ae7="">
                        <img src="../../img/personinfo/me_more-setting.6e7eefd.png" alt="" style="width:20px;margin-right:5px;display:block"
                            _v-4f0a3ae7="">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" _v-4f0a3ae7="">
                        <p _v-4f0a3ae7="">退出</p>
                    </div>
                    <div class="weui_cell_ft" _v-4f0a3ae7=""></div>
                </a>
            </div>
        </div>
    </section>
    <div data-v-0566cf72="" class="headimg-pop" v-show="isShowpopup">
        <div data-v-0566cf72="" class="headimg-all">
            <div data-v-0566cf72="">
                <a data-v-0566cf72="" href="#/reglog"  style="color:red" @click="deleteCookie">退出登录</a>
            </div>
            <div data-v-0566cf72="" class="cancel">
                <a data-v-0566cf72="" @click="isCancel">取消</a>
            </div>
        </div>
    </div>
    <div class="mask" v-show="isShowpopup"></div>
  </div>
</template>

<script>
import $ from "jquery";
import cookie from "jquery.cookie";
export default {
  data() {
    return {
      id: "",
      obj: {},
      isShowpopup: false
    };
  },
  mounted() {
    this.id = JSON.parse($.cookie("user")).userId;
    var _this = this;
    $.ajax({
      url: "http://localhost:1701/getuserinfo",
      type: "get",
      data: {
        id: _this.id
      },
      success(data) {
        console.log(data);
        _this.obj = JSON.parse(data)[0];
      }
    });
  },
  methods: {
      IsQuit(){
          this.isShowpopup = true;
      },
      isCancel(){
          this.isShowpopup = false
      },
      deleteCookie(){
          $.cookie("user",'',{expires:-1})
      }
  }
    
};
</script>



<style scoped>
.app-content {
  padding-top: 0px;
}
/* .popup{display: none;} */
.headimg-pop {
  width: 100%;
  background: #888;
  position: absolute;
  z-index:9999;
  bottom:0;
  /* display: none; */
}
.headimg-pop a {
  display: block;
  height: 45px;
  line-height: 45px;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #818192;
  color: #000;
  background: #fff;
}
.cancel {
  margin-top: 10px;
}
.mask {
  height: 100%;
  width: 100%;
  opacity: 0.3;
  background: #000;
  position: absolute;
  z-index: 888;
  top:0
}
</style>

