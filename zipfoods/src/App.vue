<template>
  <div id="app">
    <img id="logo" alt="Zipfoods logo" src="./assets/images/zipfoods-logo.png">
    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link :to='{ name: link }' exact>{{ link }}
                  <span v-if='link=="cart"'>({{cartCount}})</span>
                </router-link>
            </li>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import * as app from './app.js'
import { products } from './products.js';

export default {
  name: 'app',
  components: {
  },
  data: function() {
      return {
        links: ['home', 'products','categories','cart'],
        products: products,
        cartCount:null,
      }
  },
    mounted() {
      this.cart  = new app.Cart();
      this.cartCount = this.cart.count();
    }
}
</script>

<style lang="sass">
@import './assets/css/zipfoods.scss'
</style>