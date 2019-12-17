<template>
    <div>
        <p>!Your Plate is a convenient tool to measure the energy content of foods and track of your colorie intake.</p>
        <health-foods :category='featuredCategory'></health-foods>
    </div>
</template>

<script>
import HealthFoods from './../HealthFoods.vue';

export default {
    name:'ShowHome',
    components: { HealthFoods },
    data: function() {
        return {
            featuredCategory: 'vegetable',
        }
    }
};
</script>

<style lang="scss" scoped>
p {
    font: normal bold 1.2em/1.4 sans-serif;
    margin: 3em;
}
</style>
