import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import VueClazyLoad from 'vue-clazy-load';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueClazyLoad)

const routes = [
  { path: "/", name: "Global", component: () => import('./components/pages/World') },
  { path: "/country", name: "Country", component: () => import('./components/pages/Country') },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
