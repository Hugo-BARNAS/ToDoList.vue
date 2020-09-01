import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "../public/style.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import list from "./components/list";
import add from "./components/AddForm";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Router);
Vue.config.productionTip = false

//INSTANCIER LA VARIABLE ROUTES

let router = new Router({
  routes: [
    { path: '/new', component: add },
    { path: '/list', component: list, props: { whatToDisplay: "all" } },
    { path: '/done', component: list, props: { whatToDisplay: "done" } },
    { path: '/todo', component: list, props: { whatToDisplay: "todo" } }
  ]
})

//DECLARATION DANS VUE (ROUTES, APP)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')




