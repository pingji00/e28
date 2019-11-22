<template>
    <div id="products">
        <h2>Products</h2>
        <show-product
            v-for="product in products"
            :product='product'
            :key='product.id'
        ></show-product>
    </div>
</template>

<script>
import ShowProduct from './../ShowProduct.vue';
const axios = require('axios');

export default {
    name: 'ProductsPage',
    components: { ShowProduct },
    data: function() {
        return {
            products: null
        }
    },
    mounted() {
        axios
        .get('https://my-json-server.typicode.com/pingji00/e28-zipfoods-api/products')
        .then(response => {
            this.products = response.data;
        });
    }

}
</script>

<style lang="sass" scoped>

</style>