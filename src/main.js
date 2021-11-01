//引入移动端适配文件
import "./assets/rem"
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/resetVant.css";
import "./assets/reset.css";

import axios from "axios";
// axios请求优先级default最高
axios.defaults.baseURL = "./api"

Vue.config.productionTip = false
// 引用vant组件
import {
  Button, Search, Col, Row, Icon, Tab, Tabs, Tabbar, TabbarItem
  , Sticky, Popup, NavBar, Grid, GridItem, Image, Field
} from 'vant';
Vue.use(Button).use(Search).use(Col).use(Row).use(Icon).use(Tab)
  .use(Tabs).use(Tabbar).use(TabbarItem).use(Sticky).use(Popup).use(Field)
  .use(NavBar).use(Grid).use(GridItem).use(Image);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
