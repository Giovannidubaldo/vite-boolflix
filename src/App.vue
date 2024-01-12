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
      let endpoint = store.endpoint
      if (store.query !== '') {
        endpoint += `?api_key=${store.api_key}`

        if (store.query !== '') {
          endpoint += `&query=${store.query}`
        }
      }
      axios.get(store.endpoint).then((response) => {
        this.store.film_list = response.data.results
      })
    }
  },
  created() {

  }
}
</script>

<template lang="">
  <div>
    <AppHeader @film_search="getFIlmCard"/>
    <FilmCard />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>