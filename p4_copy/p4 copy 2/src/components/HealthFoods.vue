<template>
    <div id='featured'>
        <h2>Try to eat more Veggie!</h2>
        <ul class='cleanList'>
            <li v-for='food in healthFoods' :key='food.id'>{{ food.name }}</li>
        </ul>
    </div>
</template>

<script>
import { foods } from './../foods.js';

export default {
    name:'HealthFoods',
    props:['category'],
    computed: {
        healthFoods: function() {
            function isMatch(food) {
                return food.categories.includes(this);
            }
            return this.foods.filter(isMatch, this.category);
        }
    },

    data: function() {
        return {
            foods: foods
        }
    }
    

};
</script>

<style lang="scss" scoped>

</style>