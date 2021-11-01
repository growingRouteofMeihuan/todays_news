<template>
  <div>
    <van-sticky>
      <!-- 头 -->
      <headerWrap> </headerWrap>
      <!-- 导航栏 -->
      <navWrap> </navWrap>
    </van-sticky>
    <!-- 新闻列表 -->
    <listWrap> </listWrap>
    <!-- 底部导航栏 -->
    <footerWrap> </footerWrap>
  </div>
</template>

<script>
import headerWrap from "./headerWrap";
import navWrap from "./navWrap";
import listWrap from "./listWrap";
import footerWrap from "./footerWrap";
export default {
  name: "index",
  components: { headerWrap, navWrap, listWrap, footerWrap },
  data() {
    return {
      msg: "首页",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
