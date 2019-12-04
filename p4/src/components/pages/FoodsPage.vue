<template>
    <div>
        <h2>Foods List</h2>
        <div id="foods">
            <food-item
                v-for="food in foods"
                :food='food'
                :key='food.name'
            ></food-item>
        </div>
    </div>

</template>

<script>
// import * as app from './../../app.js'

import FoodItem from './../FoodItem.vue';

export default {
    name: 'FoodsPage',
    components: { FoodItem },
    data: function() {
        return {
        }
    },

    mounted() {

    },
    computed: {
        foods: function() {
            return this.$store.state.foods;
        }
    }
}
</script>

<style lang="sass" scoped>

</style>