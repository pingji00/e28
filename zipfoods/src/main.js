import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import ProductsPage from './components/pages/ProductsPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import CartPage from './components/pages/CartPage.vue';


Vue.use(VueRouter);
const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/pages/products', component: ProductsPage, name: 'products' },
  { path: '/pages/product/:id', component: ProductPage, name: 'product', props: true},
  { path: '/pages/categories', component: CategoriesPage, name: 'categories' },
  { path: '/pages/cart', component: CartPage, name: 'cart' }
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
