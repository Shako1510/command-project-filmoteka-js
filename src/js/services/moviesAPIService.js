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
    console.log(movies.data);
    localStorage.setItem('fetchedMovies', JSON.stringify(movies.data.results));
    return movies.data;
  }

  async fetchMoviesByQuery(query, page = 1) {
    const movies = await axios.get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    );
    localStorage.setItem('fetchedMovies', JSON.stringify(movies.data.results));
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

  get pageMovie() {
    return this.page;
  }

  set pageMovie(pageNumber) {
    this.page = pageNumber;
  }

  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }
  async fetchGenres() {
    const genres = await axios.get(
      `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    console.log(genres);
    localStorage.setItem('genresItem', JSON.stringify(genres.data.genres));
    return genres.data;
  }
}
