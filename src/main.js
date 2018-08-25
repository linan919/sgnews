// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'



Vue.config.productionTip = false


// mint-ui组件
import { Header, Button, Navbar,TabItem, TabContainer,TabContainerItem, Lazyload, Popup, Field} from 'mint-ui'
// 头部
Vue.component(Header.name, Header);
// 按钮
Vue.component(Button.name, Button);
// 导航栏
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
// TabContainer
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
// 图片懒加载
Vue.use(Lazyload);
// 弹出窗口
Vue.component(Popup.name, Popup);
// 表单
Vue.component(Field.name, Field);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})
