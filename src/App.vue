<script>
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template lang="">
  <div>
    <AppHeader />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>