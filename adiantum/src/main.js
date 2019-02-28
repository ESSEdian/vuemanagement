import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import qs from 'qs';
import ElementUI from 'element-ui';
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import api, { domain } from '../static/js/api'

Vue.use(Vuex);

Vue.use(ElementUI, { size: 'small' });
// 配置默认域名, 这样请求的时候就不用在url里每次手动加域名了
axios.defaults.baseURL = domain;
// 因为我们调用的接口跨域了, 默认情况下接口给我们设置cookie无效, 为了让它有效, 我们必须添加此配置
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.$qs = qs;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的.已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');