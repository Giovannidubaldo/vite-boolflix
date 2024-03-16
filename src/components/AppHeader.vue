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
                <div class="d-flex align-items-center">

                    <!-- Titolo -->
                    <div class="col-2">
                        <div class="logo">
                            <img src="../assets/netflix.png" alt="" class="img-fluid">
                        </div>
                    </div>

                    <div class="col-5">
                        <ul class="list-unstyled d-flex mt-3">
                            <li>Home</li>
                            <li>Serie Tv</li>
                            <li>Film</li>
                            <li>Nuovi e popolari</li>
                            <li>La mia lista</li>
                        </ul>
                    </div>

                    <!-- Input di ricerca -->
                    <div class="col-5">
                        <div class="d-flex align-items-center">
                            <input type="text" placeholder="Cerca il tuo film preferito" class="form-control my-3" v-model="store.query" @keyup.enter="$emit('card_search')">
                            <button @click="$emit('card_search')">Cerca</button>
                        </div>
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

    .logo{
        width: 200px;
    }

    ul{
        li{
            padding: 5px;
            color: #a7a5a5;

            &:hover{
                color:#fff;
            }
        }
    }

    button {
        color: white;
        background-color: #ff180a;
        padding: 8px;
        border-style: none;
        border-radius: 10px;

        &:hover {
            background-color: #c9150b;
        }
    }
}
</style>