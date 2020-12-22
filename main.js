import Vue from 'vue';
import App from './App';

// 全局注册iconfont图标
import Icon from "./compontents/icon";
// 使用Vue.compontent进行注册第一参数是我们组件内的标签第二个参数是引入的组件
Vue.component("isIcon",Icon)

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App
})
app.$mount()
