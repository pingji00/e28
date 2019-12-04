<template>
    <div class="food">
        <router-link :to='{ name:"food", params: { id: food.id }}'>
            <div class="food-name">{{ food.name }}</div>
            <img
                class='food-thumb'
                :src="require('../assets/images/foods/' + food.id + '.jpg')"
                :alt='"food image of " + food.name '
            >
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'FoodItem',
    props: ['food']
}
</script>

<style lang="sass" scoped>

</style>