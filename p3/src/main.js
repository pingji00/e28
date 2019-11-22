import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import FoodsPage from './components/pages/FoodsPage.vue';
import FoodPage from './components/pages/FoodPage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import PlatePage from './components/pages/PlatePage.vue';


Vue.use(VueRouter);
const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/pages/foods', component: FoodsPage, name: 'foods' },
  { path: '/pages/food/:id', component: FoodPage, name: 'food', props: true},
  { path: '/pages/categories', component: CategoriesPage, name: 'categories' },
  { path: '/pages/plate', component: PlatePage, name: 'plate' }
];


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
