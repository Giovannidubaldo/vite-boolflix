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
                    <li>{{film.original_title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>