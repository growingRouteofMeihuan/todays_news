<template>
  <div>
    <!-- 置顶新闻 -->
    <div class="topNews" v-for="(n, i) in newsData.bangumi" :key="i">
      <h3>
        <a target="blank" :ref="n.redirect_url">{{ n.title }}</a>
      </h3>
      <span>{{ n.tname }}</span>
      <span>{{ n.desc }}</span>
      <span>{{ n.duration }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "listWrap",
  //向网络公开接口请求数据
  created() {
    axios.get("/index/ding.json").then((_d) => {
      //console.log(_d);
      this.newsData = _d.data;
    });
  },
  data() {
    return {
      msg: "新闻list",
      //新闻结构
      newsData: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNews {
  width: 90%;
  margin: 0.3rem 0.5rem;
}
.topNews h3 {
  font-size: 0.5rem;
}
.topNews span {
  font-size: 0.25rem;
  margin-right: 0.3rem;
  color: rgb(174, 175, 177);
}
</style>