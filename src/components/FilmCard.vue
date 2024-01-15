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
                <ul>
                    <li>
                        <h3>{{film.title}}</h3>
                        <h4>{{film.original_title}}</h4>
                        <div v-if="film.original_language == 'en'"><img src="../assets/en.png" alt=""></div>
                        <div v-if="film.original_language == 'it'"><img src="../assets/it.png" alt=""></div>
                        <div v-if="film.original_language == 'fr'"><img src="../assets/fr.png" alt=""></div>
                        <div v-if="film.original_language == 'ja'"><img src="../assets/ja.png" alt=""></div>
                        <div>{{film.vote_average}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 30px;
}
</style>