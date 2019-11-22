<template>
    <div id="food-page" v-if='food'>
         <div class="title">
            <h1>{{ food.name }}</h1>
        </div>
        <img
            v-if='food.id'
            class='product-thumb'
            :alt='"food image of " + food.name'
            :src='"./../../assets/images/foods/" + food.id + ".jpg"'>
        <p class="calories"><strong>Calories</strong> {{ food.nutrition100g["energy"] }}  (per 100g)</p>
        <dl>
            <dt>carbohydrate</dt>
            <dd>{{ food.nutrition100g["carbohydrate"] }}</dd>
            <dt>fat</dt>
            <dd>{{ food.nutrition100g["fat"] }}</dd>
            <dt>protein</dt>
            <dd>{{ food.nutrition100g["protein"] }}</dd>
        </dl>

        <div class="button-wrapper">
        <button @click='addToCart(food.id)'>Add to your plate</button>
        </div>
        <transition name="fade">
            <div class="alert" v-if='addAlert'>{{ food.name }} is added</div>
        </transition>

        <router-link :to='{name: "foods"}'>Back to all foods list</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js'
export default {
    name:'FoodPage',
    props:['id',],
    data: function() {
        return {
            food: null,
            nutrition100g: null,
            addAlert: false,
            energy:null
        }
    },
    mounted() {
        this.food = app.axios
            .get(app.config.api + 'foods/' + this.id)
            .then( response => ( this.food = response.data ) );
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
        }
        dl {
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        display:grid;
        margin: 0 auto 1em;
        grid-template-columns: 1fr 1fr;

        dt {
            font-weight: 600; 
            justify-self: start;
            align-self: center;          
            padding: 0.5em 0;
        }
        dl {
            justify-self: end;
            align-self: center;          
            padding: 0.5em 0;
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