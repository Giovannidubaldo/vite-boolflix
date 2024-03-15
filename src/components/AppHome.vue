<script>
import AppHeader from './AppHeader.vue';
export default {
    name: 'AppHome',
    components:{
        AppHeader
    }
}
</script>

<template lang="">
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
</template>

<style lang="scss" scoped>
    .jumbo{
        background-image: url('../assets/Lupin.jpg');
        background-size: cover;
        height: 100vh;

        .content{
            width: 30%;
            position: relative;
            top: 15%;
            left: 7%;

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