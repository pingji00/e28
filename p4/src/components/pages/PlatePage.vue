<template>
    <div id='plate-page'>
        <h1>Your Plate</h1>
        <div v-if='items.length == 0'>No items</div>
        <ul data-test='plate-count' v-else-if='foods.length > 0' class='item-in-plate'>
            <li class="food-in-plate">
                <div>Food</div>
                <div>Calories</div>
                <div>Carbohydrate</div>
                <div>Fat</div>
                <div>Protein</div>
                <div></div>
            </li>
            <li class="food-in-plate" v-for='item in items' :key='item.id'>
                <div>
                    {{ item.quantity }} <span class="oz">oz</span> {{ getFoodDetails(item.id)['name'] }}
                    <!-- <label><span class="wps">weight per serve</span> <input type='text' v-model='weight'></label> oz -->
                    <!-- {{weight}}<span v-if='weight != null'>oz</span> -->
                </div>
                <div>
                    {{ getFoodDetails(item.id)['nutrition100g']['energy'] }}
                </div>
                <div>
                    {{ getFoodDetails(item.id)['nutrition100g']['carbohydrate'] }}g
                </div>
                <div>
                    {{ getFoodDetails(item.id)['nutrition100g']['fat'] }}g
                </div>
                <div>
                    {{ getFoodDetails(item.id)['nutrition100g']['protein'] }}g
                </div>
                <button data-test='rm-from-plate' @click='removeFromPlate(item.id)'>Remove</button>
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
            // weight:null
        };
    },
    methods: {
        getFoodDetails(productId) {
            return this.foods.find( ({id}) => id === productId );
        },
        removeFromPlate: function(productId) {
            this.plate.remove(productId);
            // app.store.plateCount = this.plate.count();
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
        console.log(this.items);
    //     this.foods = app.axios
    //         .get(app.config.api + 'foods')
    //         .then( response => ( this.foods = response.data ) );
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
            position: relative;
            text-align: left;
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
    .food-in-plate {
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr;
        &:first-child {
            background-color: #efefef;
            font-size: 0.6em;
            // font-weight: normal;
        }
    }
    .oz{
        font-size: 0.5em;
        font-weight: normal;
        position: relative;
        bottom: 0.7em;
    }
    .wps {
        font: normal normal 0.3em/1 sans-serif;
        display: inline-block;
        width: 7em;
        text-align: left;
    }
</style>