import { reactive } from 'vue';

export const store = reactive({
    endpoint_movie: 'https://api.themoviedb.org/3/search/movie?language=it-IT',
    endpoint_series: 'https://api.themoviedb.org/3/search/tv?language=it-IT',
    api_key: '12beccbed970b9a9fa625390183a5db9',
    query: '',
    film_list: [],
    series_list: []
})