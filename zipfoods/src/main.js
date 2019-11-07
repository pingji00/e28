import Vue from 'vue'
import App from './App.vue'
// src/main.js
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  { path: '/', component: ShowHome },
  { path: '/products', component: ShowProducts },
  { path: '/categories', component: ShowCategories }
];
import ShowHome from './components/ShowHome.vue';
import ShowProducts from './components/ShowProducts.vue';
import ShowCategories from './components/ShowCategories.vue';

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
