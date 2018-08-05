// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'



Vue.config.productionTip = false


// mint-ui组件
// 头部
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);
// 按钮
import { Button } from 'mint-ui'; 
Vue.component(Button.name, Button);
// 导航栏
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
// TabContainer
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
// 图片懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
