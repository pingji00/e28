<template>
    <div>
        <h2>Foods List</h2>
        <div id="foods">
            <food-item
                v-for="food in foods"
                :food='food'
                :key='food.id'
            ></food-item>
        </div>
    </div>

</template>

<script>
import * as app from './../../app.js'

import FoodItem from './../FoodItem.vue';

export default {
    name: 'FoodsPage',
    components: { FoodItem },
    data: function() {
        return {
            foods: null
        }
    },
    mounted() {
        this.foods = app.axios
            .get(app.config.api + 'foods')
            .then( response => ( this.foods = response.data ) );
        
    }

}
</script>

<style lang="sass" scoped>

</style>