<template>
  <div class="wrapDiv">
    <van-row>
      <van-col span="20"
        ><van-search
          v-model="searchValue"
          background="rgb(241, 37, 37)"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </van-col>
      <van-col span="4">
        <van-icon name="add" size=".8rem" color="#fff" />
        <span>发布</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "headerWrap",
  data() {
    return {
      msg: "导航头",
      searchValue: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapDiv {
  background-color: rgb(241, 37, 37);
}
.wrapDiv span {
  font-size: 0.3rem;
  color: #fff;
  margin: 0 0 0 0.55rem;
}
</style>