<script>
import FilmCard from './main/FilmCard.vue';
import SeriesCard from './main/SeriesCard.vue';

export default {
    name: 'AppMain',
    components:{
        FilmCard,
        SeriesCard
    },
}
</script>

<template lang="">
    <FilmCard />
    <SeriesCard class="mt-5" />
</template>

<style lang="">
    
</style>