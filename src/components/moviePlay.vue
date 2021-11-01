<template>
  <div>
    <van-sticky>
      <!-- 头 -->
      <headerWrap> </headerWrap>
      <!-- 导航栏 -->
      <navWrap> </navWrap>

      <!-- 筛选list -->
      <div class="boxWrap">
        <ul class="options">
          <li>爱情</li>
          <li>喜剧</li>
          <li>动作</li>
          <li>古装</li>
          <li @click="popupShow">筛选</li>
        </ul>
      </div>
    </van-sticky>
    <!-- 弹出筛选框 -->
    <van-popup
      v-model="isshow"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <fitterWrap
        @popupClose="popupCloseFn"
        :videoList="videoData"
      ></fitterWrap>
    </van-popup>
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
  name: "moviePlay",
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
  methods: {
    popupShow() {
      this.isshow = true;
    },
    popupCloseFn() {
      this.isshow = false;
    },
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

.boxWrap {
  background-color: #fff;
}
</style>