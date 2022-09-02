import LocalStorageAPI from './local-storage-api';
const localStorageAPI = new LocalStorageAPI();
import { PaginationHandler } from './paginationHandler';

const notification = document.querySelector('.notification'); //
const formLibraryRef = document.querySelector('#libraryForm'); //
const WatchedRef = document.querySelector('#Watched'); //
const library = document.querySelector('#library-render');
// localStorage.setItem('watched', JSON.stringify(filmWatched));
// localStorage.setItem('queue', JSON.stringify(filmQueue));

// function btnLibraryHandler(functionRender, renderDefault)
//const watchedFilms = JSON.parse(localStorage.getItem('watched'));
//const queueFilms = JSON.parse(localStorage.getItem('queue'));

function functionRender(data) {
   library.innerHTML = '';
  notification.innerHTML = '';

  const markupCard = data.movies
    .map(movie => {
      const genreLibrary = movie.genres.map(item => item.name);

      let genreRender = [];
      if (genreLibrary.length > 3) {
        genreRender = genreLibrary.slice(0, 2);
        genreRender.push('Other');
        genreRender = genreRender.join(', ');
      } else {
        genreRender = genreLibrary.join(', ');
      }

      let date = '';
      if (movie.release_date) {
        date = movie.release_date.slice(0, 4);
      }
          let vote = '';
      if (movie.vote_average) {
        vote = movie.vote_average.toString().slice(0, 3);
      }

      return `
            <li class="collection__item">
            <div class="card">
            <a href="" class="card__link" id="${movie.id}">
          <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}"onerror="this.onerror=null;this.src='https://ih1.redbubble.net/image.3553185369.0580/st,small,507x507-pad,600x600,f8f8f8.jpg'" loading="lazy" alt="" >
          <div class="card__wrap">
             <h2 class="card__title" >${movie.title}</h2>
          <div class="card__data">
       
           <p class="card__genre">${genreRender}</p>
                                
        <p class="card__year card__text">&nbsp | ${date}</p>
        <p class="card_vote">${vote}</p>
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
    data.totalPages,
    document.querySelector('.pagination__root')
  );

  pagination.initPagination();

  pagination.addEventListener('pageChanged', onButtonClick);
}

function renderDefault() {
   library.innerHTML = '';
  notification.innerHTML = '';
  const notificationText = document.createElement('p');
  notificationText.classList.add('notification-text');
  notificationText.innerHTML = "Oops, you didn't add anything yet...";
  notification.appendChild(notificationText);
}

// function btnLibraryHandler() {
//   formLibraryRef.addEventListener('change', onButtonClick);
// }

formLibraryRef.addEventListener('change', () => {
  onButtonClick();
});

function onButtonClick(page = 1) {
  const watchedFilms = localStorageAPI.getMovies('watched', page);
  const queueFilms = localStorageAPI.getMovies('queue', page);
  // e.preventDefault();
  console.log('поменяли кнопку');
  if (WatchedRef.checked) {
    if (watchedFilms.movies.length === 0) {
      console.log('отображаем заглушку');
      renderDefault();
      // викликаємо функцію рендеру заглушки
    } else {
      console.log('рендерим watchedFilms', watchedFilms);
      functionRender(watchedFilms);
    }
  } else {
    if (queueFilms.movies.length === 0) {
      console.log('отображаем заглушку');
      renderDefault();
      // викликаємо функцію рендеру заглушки
    } else {
      console.log('рендерим queueuFilms', queueFilms);
      functionRender(queueFilms);
    }
  }
}

functionRender(localStorageAPI.getMovies('watched'));
const watchedFilms = localStorageAPI.getMovies('watched');

  if (watchedFilms.movies.length === 0) {
        renderDefault();
      } else {
       functionRender(watchedFilms);
      }
