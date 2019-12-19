import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import FoodsPage from './components/pages/FoodsPage.vue';
import FoodPage from './components/pages/FoodPage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import PlatePage from './components/pages/PlatePage.vue';
import Feedback from './components/pages/Feedback.vue'
import store from './store';
import Vuelidate from 'vuelidate'

// import './filter.js';

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/pages/foods', component: FoodsPage, name: 'foods' },
  { path: '/pages/food/:id', component: FoodPage, name: 'food', props: true},
  { path: '/pages/categories', component: CategoriesPage, name: 'categories' },
  { path: '/pages/plate', component: PlatePage, name: 'plate' },
  { path: '/pages/feedback', component: Feedback, name: 'feedback' }
];


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
