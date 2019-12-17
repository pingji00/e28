<template>
    <div>
        <h2>Categories</h2>
        <ul class='cleanList'>
            <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
        </ul>
    </div>
</template>

<script>
// import { products } from './../../products.js';
// const axios = require('axios');

export default {
    name:'CategoriesPage',
    data: function() {
        return {
        }; 
    },
    computed: {
        foods: function() {
            return this.$store.state.foods;
        },
        categories: function() {
            let categories = this.foods.map(food => food.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            return  [...new Set(mergedCategories)].sort();
        }
    }

};
</script>

<style lang="scss" scoped>

</style>
