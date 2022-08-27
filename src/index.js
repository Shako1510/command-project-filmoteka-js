import MoviesApiService from './js/services/moviesAPIService';
import { PaginationHandler } from './js/services/paginationHandler';

const moviesApiService = new MoviesApiService();
console.log(moviesApiService);

async function testAPI() {
  try {
    const trendingMovies = await moviesApiService.fetchTrendingMovies();
    console.log(trendingMovies);

    const movieDetails = await moviesApiService.fetchMovieDetails(539681);
    console.log(movieDetails);

    const movieByQuert = await moviesApiService.fetchMoviesByQuery('Lion');
    console.log(movieByQuert);
  } catch (error) {
    console.log(error);
  }
}

testAPI();

moviesApiService.pageMovie = 2;

console.log(moviesApiService.pageMovie);

// initialisation pagination section
const pagination = new PaginationHandler();

pagination.initPagination(document.querySelector('.pagination__root'));

// adding listener of choosing page by pagination

pagination.addEventListener('pageChanged', pageNumber =>
  console.log('choosenPage is: ', pageNumber)
);
