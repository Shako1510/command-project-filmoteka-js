import axios from 'axios';

const API_KEY = 'c82323a9bebf6624949ce9fae3cb7c73';
const BASE_URL = 'https://api.themoviedb.org';

export default class MoviesApiService {

  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchTrendingMovies() {
    const movies = await axios.get(
      `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`
    );
    return movies.data;
  }

  async fetchMoviesByQuery(query) {
    const movies = await axios.get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${this.page}&include_adult=false`
    );
    return movies.data;
  }

  async fetchMovieDetails(movieId) {
    const movies = await axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return movies.data;
  }


  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

//    get page() {
//     return this.page;
//   }

//   set page(pageNumber) {
//    this.page = pageNumber;
//  }

  // get query() {
  //   return this.query;
  //  }

  // set query(newQuery) {
  //    this.query = newQuery;
  // }
}


