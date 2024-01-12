<script>
import AppHeader from './components/AppHeader.vue';
import FilmCard from './components/FilmCard.vue';

import axios from 'axios';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    FilmCard
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFIlmCard() {
      let endpoint_film = store.endpoint
      if (store.query !== '') {
        endpoint_film += `&api_key=${store.api_key}`

        if (store.query !== '') {
          endpoint_film += `&query=${store.query}`
        }
      }
      axios.get(endpoint_film).then((response) => {
        this.store.film_list = response.data.results
      })
    },
    getSelectFilm() {
      this.getFIlmCard()
    }
  },
  created() {

  }
}
</script>

<template lang="">
  <div>
    <AppHeader @film_search="getSelectFilm"/>
    <FilmCard />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>