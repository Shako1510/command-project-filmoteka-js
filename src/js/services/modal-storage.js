import LocalStorageAPI from './local-storage-api';

const collectionMovies = document.querySelector('.collection__list');
const openModal = document.querySelector('[data-modal]');
const btnCloseModal = document.querySelector('.modal-close__btn');
const modalContainer = document.querySelector('.modal-window__content');

class Modal extends LocalStorageAPI {
  constructor() {
    super();
    this.queuedMovie = this.getMovies('queue').movies;
    this.watchedMovie = this.getMovies('watched').movies;
    this.allMoviesOnPage = this.getMovies('fetchedMovies').movies;
    this.takeGenre = this.loadData('genresItem');
  }

  clickOnCard(evt) {
    evt.preventDefault();
    const targetFilmId = evt.srcElement.parentElement.id;
    const showCardFilm = movieCardData.allMoviesOnPage
      .map(item => item)
      .find(value => value.id === Number(targetFilmId));
    if (evt.target.closest('.card')) {
      window.addEventListener('keydown', onEscKeyPress);
      openModal.classList.add('is-open');
      const markup = makeMarkup(showCardFilm);
      modalContainer.innerHTML = markup;
    }

    const addWatchedBtn = document.querySelector('.modal-conteiner__first-btn');
    const addQueueBtn = document.querySelector('.modal-conteiner__second-btn');

    const findId = movieCardData.watchedMovie
      .map(item => item.id)
      .find(item => item === showCardFilm.id);
      
    addWatchedBtn.addEventListener('click', () => {
      console.log(movieCardData.checkMovie(showCardFilm.id))
      if (movieCardData.checkMovie(showCardFilm.id)) {
        removeFilmFromWatched(showCardFilm.id)
      }
       onAddWatchedClick(showCardFilm)
    })

      //   cass: addWatchedBtn.classList.add('btn-add__watch'),
      //   text: addWatchedBtn.textContent = 'REMOVE TO WATCH',
      // };

    

    addQueueBtn.addEventListener('click', () => {
      onAddQueueClick(showCardFilm);
      console.log('add queue');
    });
  }
}

const movieCardData = new Modal();
const storage = new LocalStorageAPI();

const searchIdInWatch = movieCardData.watchedMovie.map(value => value.id);

function removeFilmFromWatched(data) {
  storage.removeMovie('watched', data);
}

function removeFilmFromQueue(data) {
  storage.removeMovie('queue', data);
}

function onAddWatchedClick(data) {
  storage.setMovie('watched', data);
}

function onAddQueueClick(data) {
  storage.setMovie('queue', data);
}

collectionMovies.addEventListener('click', movieCardData.clickOnCard);
btnCloseModal.addEventListener('click', onModalClose);
openModal.addEventListener('click', onBackdropClick);

function onModalClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  openModal.classList.remove('is-open');
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    onModalClose();
  }
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  }
}

const genres = movieCardData.takeGenre;

function getGenres(array, genres) {
  return array
    .map(id => genres.find(element => element.id === id))
    .map(item => item.name);
}

function makeMarkup(data) {
  return `
        <div class="modal-conteiner">
            <div class="modal-container__banner">
                    <img class="modal-container__img" src="https://image.tmdb.org/t/p/w500${
                      data.poster_path
                    }"onerror="this.onerror=null;this.src='https://ih1.redbubble.net/image.3553185369.0580/st,small,507x507-pad,600x600,f8f8f8.jpg'" loading="lazy"
                    alt="Banner of the selected film">
            </div>
            <div class="modal-container__row">
                <table class="modal-table">
                    <h2 class="modal-table__title">${data.title}</h2>
                    <tr class="table__row">
                        <td class="table__description">Vote / Votes</td>
                        <td class="between-genres"></td>
                        <td class="table__data"><span class="table-data__raiting">${
                          data.vote_average
                        }</span> / <span
                                class="table-data__scores">${
                                  data.vote_count
                                }</span></td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__description">Popularity</td>
                        <td class="between-genres"></td>
                        <td class="table__data">${data.popularity}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__description">Original Title</td>
                        <td class="between-genres"></td>
                        <td class="table__data">${data.original_title}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__description">Genre</td>
                        <td class="between-genres"></td>
                        <td class="table__data">${getGenres(
                          data.genre_ids,
                          genres
                        )}</td>
                    </tr>
                </table>
                <p class="modal-container__title">ABOUT</p>
                <p class="modal-title__description">${data.overview}</p>
                <div class="modal-conteiner__btn">
                    <button type="button" aria-expanded="false" class="modal-conteiner__first-btn">add to Watched</button>
                    <button type="button" aria-expanded="false" class="modal-conteiner__second-btn">add to queue</button>
                </div>
            </div>`;
}
