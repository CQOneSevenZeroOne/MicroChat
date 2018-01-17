<template>
    <div class="father-box">
        <div class="_cover-top" _v-f50d4fca="" _v-2747733a="">
            <div class="top-back" _v-f50d4fca="">
                <a href="#/personalinfo"><div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="">取消</div></a>
            </div>
            <div class="top-other" _v-f50d4fca="">
                <div slot="right" class="_align-right" _v-2747733a="">
                    <span _v-2747733a=""><span class="green">完成</span></span>
                </div>
            </div>
            <div class="top-title _effect" _v-f50d4fca="">
                <p _v-f50d4fca="">
                    <span _v-f50d4fca="">设置名字</span>
                </p>
            </div>
        </div>
         <div class="bg-div">
                <div class="setname">
                    <input type="text" v-model="name">
                    <span @click="emptycontent"><i class="iconfont icon-shanchu4" ></i></span>
                </div>
        </div>       
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"扈冲"
        }
    },
    methods:{
        // emptycontent(){
        //     this.name = "";
        // }
    }
}
</script>

<style scoped>
.green{
    /* color:rgb(13, 245, 13); */
    color:green;
}
.bg-div {
  background-color: #efeff4;
  height: 100%;
  padding-top: 25px;
}
.bg-div > div {
  width: 100%;
  background: #fff;
  padding: 0 15px;
}
.bg-div input {
  border: none;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  font-weight: 600;
}
.setname > span {
  float: right;
  margin-top: 8px;
  color: #bfbfbf;
}
.top-back>a{color: #fff}

</style>

