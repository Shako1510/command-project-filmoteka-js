import MoviesApiService from './moviesAPIService';
const moviesApiService = new MoviesApiService();
import { PaginationHandler } from './paginationHandler';
document.addEventListener('DOMContentLoaded', onTrending);

function onTrending() {
  moviesApiService.fetchTrendingMovies().then(appendGallery);
}

const gallery = document.querySelector('.collection__list');

let currentQuery = '';

export function getQuery(query) {
  currentQuery = query;
  onSearchMovie();
}

function onSearchMovie(page = 1) {
  clearContainer();
  moviesApiService.fetchMoviesByQuery(currentQuery, page).then(appendGallery);
}

const genresList = localStorage.getItem('genresItem');
const genres = JSON.parse(genresList);

function createGenres(array, genres) {
  return array
    .map(id => genres.find(element => element.id === id))
    .map(item => item.name);
}

export function appendGallery(data) {
  clearContainer();
  const markupOneCard = data.results
    .map(movie => {
      const genresMovie = createGenres(movie.genre_ids, genres);
      // console.log(genresMovie);
      let genreRender = [];
      if (genresMovie.length > 3) {
        genreRender = genresMovie.slice(0, 2);
        genreRender.push('Other');
        genreRender = genreRender.join(', ');
        console.log('жанри', genreRender);
      } else {
        genreRender = genresMovie.join(', ');
        console.log('жанри', genreRender);
      }
      return `
            <li class="collection__item">
            <div class="card">
            <a href="" class="card__link" id="${movie.id}">
          <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${
            movie.poster_path
          }"onerror="this.onerror=null;this.src='https://ih1.redbubble.net/image.3553185369.0580/st,small,507x507-pad,600x600,f8f8f8.jpg'" loading="lazy" alt="" >
          <div class="card__wrap">
             <h2 class="card__title" >${movie.title}</h2>
          <div class="card__data">
       
          <p class="card__genre">${genreRender}</p>
               
                  
        <p class="card__year card__text">&nbsp | ${movie.release_date.slice(
          0,
          4
        )} </p>
              </div>
    </div></a>
    
            </div>
            </li>  
     `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupOneCard);

  const pagination = new PaginationHandler(
    data.page,
    data.totalPage,
    document.querySelector('.pagination__root')
  );

  pagination.initPagination();

  //  // adding listener of choosing page by pagination

  pagination.addEventListener('pageChanged', onSearchMovie);
}

function clearContainer() {
  gallery.innerHTML = '';
}
