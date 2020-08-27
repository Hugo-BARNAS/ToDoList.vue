import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "../public/style.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
