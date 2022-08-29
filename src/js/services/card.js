import MoviesApiService from './moviesAPIService';
const moviesApiService = new MoviesApiService();
console.log(moviesApiService);

document.addEventListener('DOMContentLoaded', onTrending);

async function getGenres() {
  const genres = await moviesApiService.fetchGenres();
  console.log(genres);
}

getGenres();

function onTrending(e) {
  e.preventDefault();
  moviesApiService.fetchTrendingMovies().then(appendGallery);
}

const gallery = document.querySelector('.collection__list');
const refs = {
  searchForm: document.querySelector('#search-form'),
  inputEl: document.querySelector('.form-input'),
};

refs.searchForm.addEventListener('submit', onSearchMovie);
// pagination.addEventListener('pageChanged', getPage);
let currentPage = 1;

function getPage(pageFromPagination) {
  currentPage = pageFromPagination;
  onSearchMovie();
}

// function onSearchMovie(e) {
//   e.preventDefault();
//   clearContainer();
//   moviesApiService.query = e.currentTarget.elements.query.value;
//   moviesApiService.page = currentPage;
//   console.log(moviesApiService.query);
//   moviesApiService.resetPage();
//   moviesApiService
//     .fetchMoviesByQuery(moviesApiService.query, currentPage)
//     .then(appendGallery);
// }

export default function appendGallery(data) {
  console.log(data);
  const markupOneCard = data.results
    .map(movie => {
      return `
            <li class="collection__item">
            <div class="card">
            <a href="" class="card__link" >
          <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${
            movie.poster_path
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
