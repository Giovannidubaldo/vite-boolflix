<script>
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';

import { store } from '../store.js';
export default {
    name: 'AppHome',
    components:{
        AppHeader,
        AppMain
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template lang="">

    <!-- Jumbotron della homepage -->
    <div class="jumbo">
        <div class="content">
            <div class="d-flex align-items-center mb-4">
                <div class="logo">
                    <img src="../assets/netflix.png" alt="" class="img-fluid">
                </div>
                <span class="text-uppercase text-span fs-3 ms-3">serie</span>
            </div>
            <span class="text-white fs-3">
                Fascinoso maestro della truffa e dei travestimenti. Non può recuperare il passato, ma può ottenere una verità preziosa.
            </span>
            <div class="d-flex mt-4">
                <button><i class="fa-solid fa-play me-3"></i>Riproduci</button>
                <button class="ms-3"><i class="fa-solid fa-circle-info me-3"></i>Altre info</button>
            </div>
        </div>
    </div>

    <!-- Risultati ricerca effettuata -->
    <div v-if="store.query == ''">
        <div class="container my-4">
            <div class="row">
                <h3 class="text-white">Fai la tua ricerca</h3>
            </div>
        </div>
    </div>
    <div v-else>
        <AppMain />
    </div>
</template>

<style lang="scss" scoped>
    .jumbo{
        background-image: url('../assets/Lupin.jpg');
        background-size: cover;
        height: 600px;

        .content{
            width: 30%;
            position: relative;
            top: 15%;
            left: 5%;

            .logo{
                width: 50px;
            }

            button{
                padding: 5px 20px;
                border: none;
                border-radius: 5px;
            }
        }
    }

    .text-span{
        color: #b7b5b4;
    }
</style>