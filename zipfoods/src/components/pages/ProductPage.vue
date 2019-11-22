<template>
    <div id="product-page" v-if='product'>
        <h1>Product {{ id }}</h1>
        <p>{{ product.name }}</p>
        <img
            v-if='product.id'
            class='product-thumb'
            :alt='"product image of " + product.name'
            :src='"./../../assets/images/products/" + product.id + ".jpg"'>
        <p class="description">{{ product.description }}</p>
        <div class="price">${{ product.price }}</div>

        <button @click='addToCart(product.id)'>Add to cart</button>

        <transition name="fade">
        <div class="alert" v-if='addAlert'>{{ product.name }} is added</div>
        </transition>

        <router-link :to='{name: "products"}'>&larr; Return to all products</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js'
const axios = require('axios');
export default {
    name:'ProductPage',
    props:['id',],
    data: function() {
        return {
            product: null,
            addAlert: false,
        }
    },
    mounted() {
        axios
            .get('https://my-json-server.typicode.com/pingji00/e28-zipfoods-api/products/' + this.id)
            .then(response => {
                this.product = response.data;
            });
    },
    methods: {
        addToCart: function(productID) {
            let cart = new app.Cart();
            cart.add(productID);
            app.store.cartCount = cart.count();
            this.addAlert = true;
            setTimeout(()=>(this.addAlert = false), 1000)
        }
    }
};
</script>

<style lang="scss" scoped>

.alert {
    color: white;
    background-color: lime;
    padding: 0.5em;
    margin: 1em;

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>