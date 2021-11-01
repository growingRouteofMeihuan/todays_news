<template>
  <div class="fitterWrap">
    <!-- 顶部导航 -->
    <van-nav-bar title="影视剧" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size=".7rem" />
      </template>
    </van-nav-bar>

    <!-- 筛选区 -->
    <van-tabs v-model="isActive1" type="card" @change="change1">
      <van-tab v-for="(item, inx) in category" :title="item" :key="inx">
      </van-tab>
    </van-tabs>

    <van-tabs v-model="isActive2" type="card" @change="change2">
      <van-tab v-for="(item, inx) in area" :title="item" :key="inx"> </van-tab>
    </van-tabs>

    <van-tabs v-model="isActive3" type="card" @change="change3">
      <van-tab v-for="(item, inx) in types" :title="item" :key="inx"> </van-tab>
    </van-tabs>

    <!-- 视频列表 -->

    <van-grid :border="false" :column-num="3" class="listWrap" square>
      <van-grid-item v-for="(n, i) in videoList.bangumi" :key="i">
        <van-image :src="n.pic" />
        <a target="blank" :ref="n.redirect_url">{{ n.title }}</a>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "fitterWrap",
  props: ["videoList"],
  data() {
    return {
      msg: "首页",
      isActive1: 0,
      isActive2: 0,
      isActive3: 0,
      category: ["全部类型", "电视", "纪录片", "少儿", "综艺", "电影", "游戏"],
      area: [
        "全部地区",
        "香港",
        "台湾地区",
        "中国大陆",
        "欧美",
        "日韩",
        "俄罗斯",
      ],
      types: ["全部种类", "爱情", "动作", "戏剧", "喜剧", "恐怖", "悬疑"],
    };
  },
  created() {
    axios.get("/index/ding.json", { params: { a: this.chose } }).then((_d) => {
      console.log(this.chose);
    });
  },
  computed: {
    chose() {
      var a = {
        category: this.category[this.isActive1],
        area: this.area[this.isActive2],
        types: this.types[this.isActive3],
      };
      return a;
    },
  },
  methods: {
    onClickLeft() {
      this.$emit("popupClose");
    },
    change1(name, title) {
      console.log(name, title);
      this.isActive1 = name;
      axios.get("/index/ding.json", { params: this.chose }).then((_d) => {
        console.log(this.chose);
      });
    },
    change2(name, title) {
      console.log(title, name);
      this.isActive2 = name;
      axios.get("/index/ding.json", { params: this.chose }).then((_d) => {
        console.log(this.chose);
      });
    },
    change3(name, title) {
      console.log(title, name);
      this.isActive3 = name;
      axios.get("/index/ding.json", { params: this.chose }).then((_d) => {
        console.log(this.chose);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listWrap a {
  font-size: 0.3rem;
}
</style>