import Vue from 'vue';

Vue.filter('foodImage', function(value){
    try {
        return require ('./assets/images/foods' + value + '.jpg');
    } catch (e) {
        return require('./assets/images/image-not-found.jpg');
    }
})