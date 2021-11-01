<template>
  <div class="mainWrap">
    <!-- 登录按钮 -->
    <div class="loginBtn" @click="showLoginFn">登录</div>

    <div v-show="isShow" style="width: 80%; margin: 0 auto">
      <van-field v-model="username" placeholder="请输入用户名" />
      <van-field v-model="password" placeholder="请输入密码" />

      <van-button
        type="primary"
        style="width: 40%; margin: 1rem auto"
        @click="enterLoginFn"
        >确定
      </van-button>

      <van-button
        type="primary"
        style="width: 40%; margin: 1rem auto"
        @click="cancelLoginFn"
        >取消
      </van-button>
    </div>

    <!-- 尾部footer栏 -->
    <footerWrap></footerWrap>
  </div>
</template>

<script>
import { Dialog } from "vant";
import footerWrap from "./footerWrap";

export default {
  name: "loginWrap",
  data() {
    return {
      msg: "登录页",
      isShow: false,
      username: "",
      password: "",
    };
  },
  components: { footerWrap },
  created() {
    // 获得用户名，密码
    let _u_name = localStorage.getItem("u_name");
    let _p_word = localStorage.getItem("p_word");

    if (_u_name !== null && _p_word !== null) {
      // 已经登录成功
      this.$router.push({ path: "/userCenter" });
    }
  },
  methods: {
    showLoginFn() {
      this.isShow = true;
    },
    enterLoginFn() {
      // console.log( this.username, this.password )
      if (this.username === "" || this.password === "") {
        Dialog({ message: "请输入用户名、密码" });
        return false;
      }
      // 因为没有后台，所以咱们就先假设用户名：abc，密码是123
      // 先走流程，因为实际工作当中，也是请求接口的操作
      if (this.username === "abc" && this.password === "123") {
        Dialog.alert({
          message: "登录 成功",
        }).then(() => {
          // 因为没有后台，所以只能是保存在本地存储
          localStorage.setItem("u_name", this.username);
          localStorage.setItem("p_word", this.password);

          this.$router.push({ path: "/userCenter" });
        });
      } else {
        Dialog.alert({
          message: "用户名、密码，错误",
        }).then(() => {
          this.username = "";
          this.password = "";
        });
      }
    },
    cancelLoginFn() {
      this.isShow = false;
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
.loginBtn {
  width: 3rem;
  height: 3rem;
  background: #f00;
  margin: 2rem auto;
  font-size: 0.8rem;
  color: #fff;
  line-height: 3rem;
  text-align: center;
  border-radius: 100%;
}
</style>
