<script>
import { store } from '../store';
export default {
    name: 'FilmCard',
    data() {
        return {
            store,
        }
    },
    methods: {
        getStar(vote) {
            return Math.ceil(vote)
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <h2 v-if="store.film_list.length > 0" class="my-4">Film</h2>
            <div class="col-12 col-md-6 col-lg-3" v-for="(film,index) in store.film_list" :key="index">
                <div class="card-container">
                    <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="" class="cover">
                    <div class="info-card">
                        <h4>{{film.title}}</h4>
                        <h6>{{film.original_title}}</h6>
                        <div v-if="film.original_language == 'en'"><img src="../assets/en.png" alt="" class="img-flag"></div>
                        <div v-if="film.original_language == 'it'"><img src="../assets/it.png" alt="" class="img-flag"></div>
                        <div v-if="film.original_language == 'fr'"><img src="../assets/fr.png" alt="" class="img-flag"></div>
                        <div v-if="film.original_language == 'ja'"><img src="../assets/ja.png" alt="" class="img-flag"></div>
                        <div class="mt-2">
                            <i v-for="i in getStar(film.vote_average / 2)" class="fas fa-star"></i>
                            <i v-for="i in 5 - getStar(film.vote_average / 2)" class="far fa-star"></i>
                        </div>
                        <h5 class="mt-3">Trama</h5>
                        <h6>{{film.overview}}</h6>
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