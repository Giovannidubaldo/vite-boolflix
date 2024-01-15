<script>
import { store } from '../store';
export default {
    name: 'FilmCard',
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <h2 v-if="store.film_list.length > 0" class="my-4">Film</h2>
            <div class="col-12 col-md-6 col-lg-3" v-for="(film,index) in store.film_list" :key="index">
                <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
                <h3>{{film.title}}</h3>
                <h4>{{film.original_title}}</h4>
                <div v-if="film.original_language == 'en'"><img src="../assets/en.png" alt="" class="img-flag"></div>
                <div v-if="film.original_language == 'it'"><img src="../assets/it.png" alt="" class="img-flag"></div>
                <div v-if="film.original_language == 'fr'"><img src="../assets/fr.png" alt="" class="img-flag"></div>
                <div v-if="film.original_language == 'ja'"><img src="../assets/ja.png" alt="" class="img-flag"></div>
                <div>{{film.vote_average}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-flag {
    width: 30px;
}
</style>