import MoviesApiService from './moviesAPIService';
const moviesApiService = new MoviesApiService();

import LocalStorageAPI from './local-storage-api';
const LocalStorageAPI = new LocalStorageAPI();

import { PaginationHandler } from './paginationHandler';

const notification = document.querySelector('.notification'); //
const formLibraryRef = document.querySelector('#libraryForm'); //
const WatchedRef = document.querySelector('#Watched'); //
const library = document.querySelector('#library-render');
// localStorage.setItem('watched', JSON.stringify(filmWatched));
// localStorage.setItem('queue', JSON.stringify(filmQueue));

// function btnLibraryHandler(functionRender, renderDefault)
const watchedFilms = JSON.parse(localStorage.getItem('watched'));
console.log(watchedFilms);
const queueFilms = JSON.parse(localStorage.getItem('queue'));
console.log(queueFilms);

// import btnLibraryHandler from './js/services/buttonLibraryHandler';
// import { renderDefault } from './js/services/libraryRending';
// import { functionRender } from './js/services/libraryRending';

// console.log(functionRender)

// const genresList = localStorage.getItem('genresItem');
// const genres = JSON.parse(genresList);
// console.log(genres);

// function createGenres(array, genres) {
//   return array
//     .map(id => genres.find(element => element.id === id))
//     .map(item => item.name);
// }

function functionRender(data) {
  library.innerHTML = '';

  console.log(data);

  const markupCard = data
    .map(movie => {
      //   const genresMovie = createGenres(movie.genres, genres);
      //   console.log(movie.genres);
      //   let genreRender = [];
      //   if (genresMovie.length > 3) {
      //     genreRender = genresMovie.slice(0, 2);
      //     genreRender.push('Other');
      //     genreRender = genreRender.join(', ');
      //   } else {
      //     genreRender = genresMovie.join(', ');
      //   }

      let date = '';
      if (movie.release_date) {
        date = movie.release_date.slice(0, 4);
      }

      return `
            <li class="collection__item">
            <div class="card">
            <a href="" class="card__link" id="${movie.id}">
          <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}"onerror="this.onerror=null;this.src='https://ih1.redbubble.net/image.3553185369.0580/st,small,507x507-pad,600x600,f8f8f8.jpg'" loading="lazy" alt="" >
          <div class="card__wrap">
             <h2 class="card__title" >${movie.title}</h2>
          <div class="card__data">
       
       
                                
        <p class="card__year card__text">&nbsp | ${date}</p>
              </div>
    </div></a>
    
            </div>
            </li>  
     `;
    })
    .join('');
  library.insertAdjacentHTML('beforeend', markupCard);

  const pagination = new PaginationHandler(
    data.page,
    data.totalPage,
    document.querySelector('.pagination__root')
  );

  pagination.initPagination();

  pagination.addEventListener('pageChanged', onSearchMovie);
}

// function functionRender(data) {
//   console.log(data);
//   console.log('Bogdan renderit ety daty');
// }

function renderDefault() {
  const notificationText = document.createElement('p');
  notificationText.classList.add('notification-text');
  notificationText.innerHTML = "Oops, you didn't add anything yet...";
  notification.appendChild(notificationText);
}

function btnLibraryHandler(functionRender, renderDefault) {
  formLibraryRef.addEventListener('change', onButtonClick);
  function onButtonClick() {
    // e.preventDefault();
    console.log('поменяли кнопку');
    if (WatchedRef.checked) {
      if (!watchedFilms) {
        console.log('отображаем заглушку');
        renderDefault();
        // викликаємо функцію рендеру заглушки
      } else {
        functionRender(watchedFilms);
        console.log('рендерим watchedFilms', watchedFilms);
      }
    } else {
      if (!queueFilms) {
        console.log('отображаем заглушку');
        renderDefault();
        // викликаємо функцію рендеру заглушки
      } else {
        functionRender(queueFilms);
        console.log('рендерим queueuFilms', queueFilms);
      }
    }
  }
}
btnLibraryHandler(functionRender, renderDefault);
