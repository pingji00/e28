<template>
    <div id='plate-page'>
        <h1>Your Plate</h1>
        <div v-if='items.length == 0'>No items</div>
        <ul v-else-if='foods.length > 0' class='item-in-plate'>
            <li v-for='item in items' :key='item.id'>
                {{ item.quantity }} x {{ getFoodDetails(item.id)['name'] }}
                <button @click='removeFromPlate(item.id)'>Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from './../../app.js';
export default {
    name: 'PlatePage',
    data: function() {
        return {
            items:[],
            plate:null,
        };
    },
    methods: {
        getFoodDetails(productId) {
            return this.foods.find( ({id}) => id === productId );
        },
        removeFromPlate: function(productId) {
            this.plate.remove(productId);
            this.$store.commit('setPlateCount', this.plate.count());
        }
    },
    computed: {
        foods: function() {
            return this.$store.state.foods;
        }
    },
    mounted() {
        this.plate = new app.Plate();
        this.items = this.plate.getItems();
    },

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