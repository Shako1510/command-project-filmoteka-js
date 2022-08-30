import MoviesApiService from './moviesAPIService';
const moviesApiService = new MoviesApiService();
// console.log(moviesApiService);
import { PaginationHandler } from './paginationHandler';
console.log(PaginationHandler);
document.addEventListener('DOMContentLoaded', onTrending);
// async function getGenres() {
//   const genres = await moviesApiService.fetchGenres();
//   // console.log(genres);
// }
// getGenres();
function onTrending(e) {
  e.preventDefault();
  moviesApiService.fetchTrendingMovies().then(appendGallery);
}
const gallery = document.querySelector('.collection__list');
// const refs = {
//   searchForm: document.querySelector('#search-form'),
//   inputEl: document.querySelector('.form-input'),
// };
// refs.searchForm.addEventListener('submit', onSearchMovie);
// // pagination.addEventListener('pageChanged', getPage);
// let currentPage = 1;
let currentPage = 1;
let currentQuery = '';
function getPage(pageNumber) {
  console.log('getPage');
  currentPage = pageNumber;
  console.log(currentPage);
  onSearchMovie();
}

export function getQuery(query) {
  currentQuery = query;
  console.log('getQuery', currentQuery);
  onSearchMovie(currentQuery);
}
function onSearchMovie() {
  clearContainer();
  //  moviesApiService.resetPage();
  moviesApiService
    .fetchMoviesByQuery(currentQuery, currentPage)
    .then(appendGallery);
}
export default function appendGallery(data) {
  console.log(data);
  clearContainer();
  const markupOneCard = data.results
    .map(movie => {
      return `
            <li class="collection__item">
            <div class="card" id="${movie.id}">
            <a href="" class="card__link" >
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
}
function clearContainer() {
  gallery.innerHTML = '';
}
const pagination = new PaginationHandler(
  15,
  document.querySelector('.pagination__root')
);
pagination.initPagination();
// adding listener of choosing page by pagination
pagination.addEventListener('pageChanged', getPage);
console.log(getPage(5));