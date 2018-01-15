<template>
      <header v-html="html">
          
      </header>
</template>
<script>
export default {
  data() {
    return {
      html: "微信"
    };
  }
};
</script>
<style scope>
header {
  line-height: 45px;
  text-align: center;
  width: 100%;
  background: linear-gradient(180deg, #303036, #3c3b40);
  font-size: 19px;
  height: 45px;
  color: #fff;
}
</style>

