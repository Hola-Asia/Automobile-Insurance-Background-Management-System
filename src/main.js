import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
<<<<<<< HEAD
=======

>>>>>>> 010b761740b7d0513f38eea6c3683ea29a37e185
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')