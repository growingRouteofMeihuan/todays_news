<template>
  <div>
    <van-sticky>
      <!-- 头 -->
      <headerWrap> </headerWrap>
      <!-- 导航栏 -->
      <navWrap> </navWrap>
    </van-sticky>

    <!-- 视频展示 -->
    <div class="vedioList" v-for="(n, i) in videoData.bangumi" :key="i">
      <a target="blank" :ref="n.redirect_url">{{ n.title }}</a>
      <img :src="n.pic" />
    </div>

    <footerWrap> </footerWrap>
  </div>
</template>

<script>
import footerWrap from "./footerWrap";
import headerWrap from "./headerWrap";
import navWrap from "./navWrap";
import fitterWrap from "./fitterWrap";

import axios from "axios";
export default {
  name: "xiguaPlay",
  components: { headerWrap, navWrap, footerWrap, fitterWrap },
  data() {
    return {
      msg: "西瓜视频",
      videoData: [],
      isshow: false,
    };
  },
  created() {
    axios.get("/index/ding.json").then((_d) => {
      //console.log(_d);
      this.videoData = _d.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vedioList {
  width: 100%;
}
.vedioList a {
  font-size: 0.5rem;
}
.vedioList img {
  width: 90%;
}
.options {
  width: 100%;
  overflow: hidden;
}
.options li {
  font-size: 0.5rem;
  float: left;
  margin: 0.1rem 0.4rem;
  background-color: rgb(238, 236, 236);
  border-radius: 0.2rem;
  padding: 0 0.1rem;
}
</style>