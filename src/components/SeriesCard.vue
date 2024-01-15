<script>
import { store } from '../store';

export default {
    name: 'SeriesCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <h2 v-if="store.series_list.length > 0" class="my-4">Serie Tv</h2>
            <div class="col-12 col-md-6 col-lg-3" v-for="(series,index) in store.series_list" :key="index">
                <img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" alt="">
                <h3>{{series.name}}</h3>
                <h4>{{series.original_name}}</h4>
                <div v-if="series.original_language == 'en'"><img src="../assets/en.png" alt="" class="img-flag"></div>
                <div v-if="series.original_language == 'it'"><img src="../assets/it.png" alt="" class="img-flag"></div>
                <div v-if="series.original_language == 'fr'"><img src="../assets/fr.png" alt="" class="img-flag"></div>
                <div v-if="series.original_language == 'ja'"><img src="../assets/ja.png" alt="" class="img-flag"></div>
                <div>{{series.vote_average}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-flag {
    width: 30px;
}
</style>