import { reactive } from 'vue';

export const store = reactive({
    endpoint: 'https://api.themoviedb.org/3/search/movie',
    api_key: '12beccbed970b9a9fa625390183a5db9',
    query: '',
    film_list: []
})