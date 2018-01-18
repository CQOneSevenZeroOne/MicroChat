<template>
      <header >
          <p v-html="html"></p>
           <img :src="img[1]" alt="">
          <img :src="img[0]" alt="" @click="tosearch">
         
      </header>
</template>
<script>
import img1 from "../../img/scale.jpg";
import img2 from "../../img/add.jpg";
export default {
  data() {
    return {
      html: "微信",
      img:[img1,img2]
    };
  },
  methods:{
    tosearch(){
      this.$router.push({ path: '/search' })
    }
  }
};
</script>
<style scoped>
header {
  line-height: 45px;
  text-align: center;
  width: 100%;
  background: linear-gradient(180deg, #393A3F, #393A3F);
  font-size: 19px;
  height: 45px;
  color: #fff;
}
p{
  float: left;
  margin-left:8%;
}
img{
  float: right;
  margin:12px 18px 0 10px;
  width:20px;
}
</style>

