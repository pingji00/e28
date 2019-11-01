import Vue from 'vue';
import GuessGame from './components/GuessGame.vue'

let app = new Vue({
    el: '#app',
    components: {
        'guess-game': GuessGame
    },
})