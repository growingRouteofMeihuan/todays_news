<template>
  <div class="footerWrap">
    <van-tabbar
      v-model="footActive"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="onChange"
    >
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.home_red : icon.home_grey" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/xiguaPlay">
        <span>西瓜视频</span>
        <template #icon="props">
          <img :src="props.active ? icon.play_red : icon.play_grey" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/moviePlay">
        <span>放映厅</span>
        <template #icon="props">
          <img :src="props.active ? icon.cinema_red : icon.cinema_grey" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/login">
        <span>{{ islogin }}</span>
        <template #icon="props">
          <img :src="props.active ? icon.login_red : icon.login_grey" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import home_red from "../assets/home_red.png";
import home_grey from "../assets/home_grey.png";

import play_red from "../assets/play_red.png";
import play_grey from "../assets/play_grey.png";

import cinema_red from "../assets/cinema_red.png";
import cinema_grey from "../assets/cinema_grey.png";

import login_red from "../assets/login_red.png";
import login_grey from "../assets/login_grey.png";
export default {
  name: "footerWrap",
  created() {
    // 页面更新时，加载之前保存的index，要转回js对象
    this.footActive = JSON.parse(localStorage.getItem("footerInx"));
    // 获得用户名，密码
    let _u_name = localStorage.getItem("u_name");
    let _p_word = localStorage.getItem("p_word");

    if (_u_name !== null && _p_word !== null) {
      // 已经登录成功
      this.islogin = "已登录";
    }
  },
  data() {
    return {
      msg: "底部导航栏",
      footActive: 0,
      islogin: "未登录",
      icon: {
        home_red: home_red,
        home_grey: home_grey,

        play_red: play_red,
        play_grey: play_grey,

        cinema_red: cinema_red,
        cinema_grey: cinema_grey,

        login_red: login_red,
        login_grey: login_grey,
      },
    };
  },
  methods: {
    //监听footer的index变化
    onChange(index) {
      this.footActive = index;
      // 本地存储，需要转成json对象
      localStorage.setItem("footerInx", JSON.stringify(this.footActive));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>