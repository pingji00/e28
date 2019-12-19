<template>
    <div id="food-page" v-if='food'>
         <div class="title">
            <h1>{{ food.name }}</h1>
        </div>
        <img
            v-if='food.id'
            class='food-thumb'
            :alt='"food image of " + food.name'
            :src='"./../../assets/images/foods/" + food.id + ".jpg"'>
        <p class="calories" v-if='food.nutrition100g'><strong>Calories</strong> {{ food.nutrition100g["energy"] }}  <span>per 100g</span> </p>
        <dl v-if='food.nutrition100g' data-test='nutrition'>
            <dt>carbohydrate</dt>
            <dd>{{ food.nutrition100g["carbohydrate"] }}g</dd>
            <dt>fat</dt>
            <dd>{{ food.nutrition100g["fat"] }}g</dd>
            <dt>protein</dt>
            <dd>{{ food.nutrition100g["protein"] }}g</dd>
        </dl>

        <div class="button-wrapper">
        <!-- <label>Add <input type='text' v-model='quantity'></label> oz to my plate -->
        <button data-test="add-to-plate-btn" @click='addToPlate(food.id)'>Add 
            <!-- {{quantity}}<span v-if='quantity != null'>oz</span>  -->
            to your plate</button>
        </div>
        <router-link :to='{name: "foods"}'>Back to all foods list</router-link>
        <transition name="fade">
            <div class="alert" v-if='addAlert'>{{ food.name }} is added</div>
        </transition>
    </div>
</template>

<script>
import * as app from './../../app.js'
export default {
    name:'FoodPage',
    props:['id'],
    data: function() {
        return {
            // food: null,
            nutrition100g: null,
            addAlert: false,
            // quantity:null
        }
    },
    computed: {
        food() {
            return this.$store.getters.getFoodById(this.id);
        }
    },
    mounted() {
        // this.food = app.axios
        //     .get(app.config.api + 'foods/' + this.id)
        //     .then( response => ( this.food = response.data ) );
    },
    methods: {
        addToPlate: function(productID) {
            let plate = new app.Plate();
            plate.add(productID);
            // app.store.plateCount = plate.count();
            this.$store.commit('setPlateCount', plate.count());
            this.addAlert = true;
            setTimeout(()=>(this.addAlert = false), 1000)
        }
    }
};
</script>

<style lang="scss" scoped>

#food-page {
    img {
        width: 200px;
        height: auto;
        border-radius: 7px;
    }

        p.calories {
            font-size: 1.5em;
            margin:1em auto;
            text-align: left;
            span {
                display: inline-block;
                font-size: 0.5em;
                width: 2em;    
            }
        }
        dl {
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        display:grid;
        margin: 0 auto 1em;
        grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;


        dt {
            font-weight: 600; 
            justify-self: end;
            align-self: center;          
            padding: 0.5em 0;
        }
        dd {
            justify-self: start;
            align-self: center;          
            padding: 0.5em 0;
            margin-left: 0.5em;
        }
    }
}

button {
    background: blue;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 0.2em 1em 0.5em;
    font-size: 1.3em;
    margin: 2em;
}
.alert {
    color: white;
    background-color:darkgrey;
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