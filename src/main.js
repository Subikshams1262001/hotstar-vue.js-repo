import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(VueScrollFixedNavbar);
Vue.use(BootstrapVue);

Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");