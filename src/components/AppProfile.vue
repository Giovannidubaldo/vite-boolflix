<script>
import {store} from '../store.js';

export default {
    name: 'AppProfile',
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
    <!-- Logo Netflix -->
    <header>
        <div class="container-fluid p-3">
            <div class="row">
                <div class="logo">
                    <img src="../assets/netflix.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </header>

    <!-- Sezione Profili -->
    <main class="h-100">
        <div class="profile">
            <div>
                <h1 class="text-white text-center">Chi vuole guardare Netflix?</h1>
                <div class="d-flex">
                    <div class="box mt-5" v-for="(item, index) in store.profileList" :key="index" @click="store.profile = false">
                        <img :src="item.img" alt="" class="img-fluid">
                        <h3 class="text-center text-white">{{item.name}}</h3>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button>Gestisci profili</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .logo{
        width: 200px;
    }

    .profile{
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;

        .box{
            margin: 0 10px;
            width: 200px;
            height: 200px;

            &:hover{
                filter: grayscale(50%); 
            }
        }

        button{
            margin-top: 100px;
            text-transform: uppercase;
            padding: 3px 20px;
            background-color: black;
            border: 1px solid #7f7f7f; 
            color: #7f7f7f;
        }
    }
</style>