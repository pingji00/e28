<template>
  <div id="app">
    <img id="logo" alt="P3 logo" src="./assets/images/logo.png">
    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link :to='{ name: link }' exact>{{ link }}
                  <span v-if='link=="plate"'>({{ plateCount}})</span>
                </router-link>
            </li>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import * as app from './app.js'

export default {
  name: 'app',
  components: {
  },
  data: function() {
      return {
        links: ['home', 'foods','categories','plate'],
        products: [],
        // plateCount:null,
        sharedState: app.store
      }
  },
  computed: {
    plateCount: function() {
      return this.$store.state.plateCount;
    }
  },
  mounted() {
    console.log(this.$store.state.plateCount);
    this.plate  = new app.Plate();
    // this.plateCount = this.plate.count();
    this.$store.commit('setPlateCount', this.plate.count());
    this.$store.dispatch('setFoods');
  //   this.products = app.axios
  //     .get(app.config.api + 'foods')
  //     .then( response => ( this.products = response.data ) );
  }
}
</script>

<style lang="sass">
@import './assets/css/foods.scss'
</style>