<template>
  <div class="mainWrap">
    <h1 style="font-size: 0.5rem">{{ msg }}</h1>
    <van-button
      type="primary"
      style="width: 40%; margin: 1rem auto"
      @click="logOutFn"
      >退出登录
    </van-button>

    <!-- 尾部footer栏 -->
    <footerWrap></footerWrap>
  </div>
</template>

<script>
import { Dialog } from "vant";
import footerWrap from "./footerWrap";

export default {
  name: "userCenter",
  data() {
    return {
      msg: "用户中心页",
    };
  },
  components: { footerWrap },
  methods: {
    logOutFn() {
      Dialog.alert({
        message: "退出登录",
      }).then(() => {
        // 清除本地存储中的用户名、密码
        localStorage.removeItem("u_name");
        localStorage.removeItem("u_password");
        //localStorage.clear("");
        this.$router.push({ path: "/login" });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnSty {
  font-size: 0.5rem;
  padding: 0.5rem;
}
.mainWrap {
  position: relative;
  padding-top: 185px;
}
.toTop {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}
</style>
