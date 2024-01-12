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
            <div class="col-12 col-md-6 col-lg-3" v-for="(film,index) in store.film_list" :key="index">
                <ul>
                    <li>
                        <h3>{{film.title}}</h3>
                        <h4>{{film.original_title}}</h4>
                        <div>{{film.original_language}}</div>
                        <div>{{film.vote_average}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>