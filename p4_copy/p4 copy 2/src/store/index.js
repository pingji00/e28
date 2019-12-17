import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './../app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        plateCount: 0,
        foods: [],
    },
    mutations: {
        setPlateCount(state, payload) {
            state.plateCount = payload;
        },
        updatePlateCount(state, payload) {
            state.plateCount += payload;
        },
        setFoods(state, payload) {
            state.foods = payload;
        }
    },
    actions: {
        setFoods(context) {
            this.foods = app.axios
            .get(app.config.api + 'foods')
            .then( response => { context.commit('setFoods', response.data) } );
        }
    },
    getters: {
        getFoodById(state) {
            return function(id) {
                return state.foods.find( food => food.id = id );
            }
        }
    }
})