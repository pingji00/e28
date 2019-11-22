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
const axios = require('axios');

export default {
    name:'CategoriesPage',
    data: function() {
        return {
            products: null,
            categories: null,
        }; 
    },
    methods: {
        loadcategories: function() {
            let categories = this.products.map(product => product.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            this.categories =  [...new Set(mergedCategories)].sort();
        }
    },

    mounted() {
        axios
        .get('https://my-json-server.typicode.com/pingji00/e28-p3-foods-api/foods')
        .then(response => {
            this.products = response.data;
            this.loadcategories();
        });
    }
    

};
</script>

<style lang="scss" scoped>

</style>
