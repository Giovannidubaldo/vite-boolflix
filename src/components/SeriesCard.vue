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
                <div class="card-container">
                    <img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" alt="" class="cover">
                    <div class="info-card">
                        <h4>{{series.name}}</h4>
                        <h6>{{series.original_name}}</h6>
                        <div v-if="series.original_language == 'en'"><img src="../assets/en.png" alt="" class="img-flag"></div>
                        <div v-if="series.original_language == 'it'"><img src="../assets/it.png" alt="" class="img-flag"></div>
                        <div v-if="series.original_language == 'fr'"><img src="../assets/fr.png" alt="" class="img-flag"></div>
                        <div v-if="series.original_language == 'ja'"><img src="../assets/ja.png" alt="" class="img-flag"></div>
                        <div>{{series.vote_average}}</div>
                        <h5 class="mt-3">Trama</h5>
                        <h6>{{series.overview}}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card-container {
    &:hover .cover {
        display: none;
    }

    &:hover .info-card {
        display: block;
    }

    .img-flag {
        width: 30px;
    }
}
</style>