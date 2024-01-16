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
        <div class="container-fluid">
            <div class="row">
                <div class="d-flex justify-content-between align-items-center">
                    <h1 class="text-uppercase">Boolflix</h1>
                    <div class="d-flex align-items-center">
                        <input type="text" placeholder="Cerca il tuo film preferito" class="form-control my-3" v-model="store.query" @keyup.enter="$emit('card_search')">
                        <button @click="$emit('card_search')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #000000;
    padding: 10px;

    h1 {
        color: #ff180a;
    }

    input {
        width: 400px;
    }

    button {
        color: white;
        background-color: #ff180a;
        padding: 10px;
        border-style: none;
        border-radius: 10px;

        &:hover {
            background-color: #c9150b;
        }
    }
}
</style>