<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <input type="text" placeholder="Cerca il tuo film preferito" class="form-control my-3" v-model="store.query" @keyup.enter="$emit('film_search')">
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>