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

export function appendGallery(data) {
  clearContainer();
  const markupOneCard = data.results
    .map(movie => {
      return `
            <li class="collection__item">
            <div class="card">
            <a href="" class="card__link" id="${movie.id}">
          <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${movie.poster_path
        }" alt="" ></a>
          <div class="card__wrap">
             <h2 class="card__title" >${movie.title}</h2>
          <div class="card__data">
        <ul class="card__genres">
          <li class="card__genre">lhfvf</li>
          <li class="card__genre"><a href="" class="card__text"></a></li>
          <li class="card__genre"><a href="" class="card__text"></a></li>
                  </ul>
        <p class="card__year card__text">|${movie.release_date.slice(0, 4)} </p>
              </div>
    </div>
    
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

  // adding listener of choosing page by pagination

  pagination.addEventListener('pageChanged', onSearchMovie);
}

function clearContainer() {
  gallery.innerHTML = '';
}
