<template>
    <div id='cart-page'>
        <h1>Your Plate</h1>
        <div v-if='items.length == 0'>No items</div>
        <ul v-else-if='products.length > 0' class='item-in-plate'>
            <li v-for='item in items' :key='item.id'>
                {{ item.quantity }} x {{ getProductDetails(item.id)['name'] }}
                <button @click='removeFromCart(item.id)'>Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from './../../app.js';
export default {
    name: 'CartPage',
    data: function() {
        return {
            items:[],
            cart:null,
            products:[]

        };
    },
    methods: {
        getProductDetails(productId) {
            return this.products.find( ({id}) => id === productId );
        },
        removeFromCart: function(productId) {
            this.cart.remove(productId);
            app.store.cartCount = this.cart.count();
        }
    },
    mounted() {
        this.cart = new app.Cart();
        this.items = this.cart.getItems();
        console.log(this.items);
        this.products = app.axios
            .get(app.config.api + 'foods')
            .then( response => ( this.products = response.data ) );
    }
};
</script>

<style lang="scss" scoped>
    h1 {
        margin: 2em 0 1em;
    }
    .item-in-plate {
        font: normal bold 1.2em/1.3 sans-serif;
        list-style-type: none;
        li {
            padding: 0.5em 0 1em;
            border-bottom: 1px solid black;
            &:first-child {
                        border-top: 1px solid black;

            }
            button {
                background-color: #004990;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 0.2em 1em 0.3em;
            }
        }
    }
</style>