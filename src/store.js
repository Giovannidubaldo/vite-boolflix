import { reactive } from 'vue';

export const store = reactive({
    endpoint_movie: 'https://api.themoviedb.org/3/search/movie?language=it-IT',
    endpoint_series: 'https://api.themoviedb.org/3/search/tv?language=it-IT',
    api_key: '12beccbed970b9a9fa625390183a5db9',
    query: '',

    // Array vuoti da riempire attraverso la ricerca effettuata
    film_list: [],
    series_list: [],

    // Variabile per la scelta dei profili
    profile: true,

    // Lista utenti
    profileList: [
        {
            name: 'Il Professore',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBySxEFlC48_5lLURMuUsMiIQ1QaDzdPM8g&usqp=CAU'
        },
        {
            name: 'Lucifer',
            img: 'https://i.pinimg.com/736x/d5/ed/8c/d5ed8c95bd414992f51cc7a3f59d1458.jpg'
        },
        {
            name: 'Daredevil',
            img: 'https://www.techstation.it/wp-content/uploads/2018/07/icone-del-profilo-di-Netflix-15.jpg'
        },
        {
            name: 'Denver',
            img: 'https://www.agemobile.com/wp-content/uploads/2018/07/La-Casa-de-Papel_Profile-Icon_01_Denver.jpg'
        }
    ]
})