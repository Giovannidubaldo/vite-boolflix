<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppHome from './components/AppHome.vue';

import axios from 'axios';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppHome,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFIlmCard() {
      let endpoint_film = store.endpoint_movie
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
    getSeriesCard() {
      let endpoint_series = store.endpoint_series
      if (store.query !== '') {
        endpoint_series += `&api_key=${store.api_key}`

        if (store.query !== '') {
          endpoint_series += `&query=${store.query}`
        }
      }
      axios.get(endpoint_series).then((response) => {
        this.store.series_list = response.data.results
      })
    },
    getSelectCard() {
      this.getFIlmCard(),
      this.getSeriesCard()
    }
  },
}
</script>

<template lang="">
  <div>
    <AppHeader @card_search="getSelectCard"/>
    <div v-if="store.query == ''">
      <AppHome />
    </div>
    <div v-else>
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>