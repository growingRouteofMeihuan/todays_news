<template>
  <div class="navWrap">
    <van-tabs>
      <van-tab
        v-for="(item, inx) in navList"
        :title="item.n"
        :key="inx"
        :dot="Boolean(item.isdot)"
      >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "navWrap",
  data() {
    return {
      msg: "导航条",
      //因为有3个组件都用到这个组件，但是内部的数据不一样，
      //跨域考虑把这个数据放到redux
      navList: [
        { n: "关注", isdot: 1 },
        { n: "推荐", isdot: 0 },
        { n: "热榜", isdot: 0 },
        { n: "抗疫", isdot: 1 },
        { n: "免费小说", isdot: 0 },
        { n: "小视频", isdot: 0 },
        { n: "影视剧", isdot: 0 },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>