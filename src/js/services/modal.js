import MoviesApiService from './moviesAPIService';

const moviesApiService = new MoviesApiService();
const openModalDescription = document.querySelector('.collection__list');
const showModal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('.modal-close__btn');
const modalContainer = document.querySelector('.modal-window__content');

// function getGenresDataStorage() {
//   const getValueKeyForGenre = localStorage.getItem("genresItem");
//     return JSON.parse(getValueKeyForGenre);
// };

function localStorageFilms(value) {
  const filmsFromLocalStorage = localStorage.getItem("fetchedMovies")
  const sortingFilms = JSON.parse(filmsFromLocalStorage);
  return sortingFilms.map(value => value);
};

// Підтягування id фільму
function makeMarkup(data) {  
  const markup = `
        <div class="modal-conteiner">
            <div class="modal-container__banner">
                <img class="modal-container__img" src="https://image.tmdb.org/t/p/w500${data.poster_path}"
                    alt="Banner of the selected film">
            </div>
            <div class="modal-container__row">
                <table class="modal-table">
                    <h2 class="modal-table__title">${data.title}</h2>
                    <tr class="table__row">
                        <td class="table__description">Vote / Votes</td>
                        <td class="between-genres"></td>
                        <td class="table__data"><span class="table-data__raiting">${data.vote_average}</span> / <span
                                class="table-data__scores">${data.vote_count}</span></td>
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
                        <td class="table__data">${data.genres.map(value => Object.values(value.name).join(""))}</td>
                    </tr>
                </table>
                <p class="modal-container__title">ABOUT</p>
                <p class="modal-title__description">${data.overview}</p>
                <div class="modal-conteiner__btn">
                    <button type="button" class="modal-conteiner__first-btn">add to Watched</button>
                    <button type="button" class="modal-conteiner__second-btn">add to queue</button>
                </div>
            </div>`;
    return modalContainer.innerHTML = markup;
};

async function searchedData(id) {
  try {
    const data = await moviesApiService.fetchMovieDetails(id);
    const markup = await makeMarkup(data);
    return markup;

  } catch (error) {
    console.error(error);
  };
};

// Додаємо слухача і відкриваємо модальне вікно при кліку на картку
openModalDescription.addEventListener('click', onModalClick);
function onModalClick(evt) {
  evt.preventDefault();
  if (evt.target.closest('.card')) {
    window.addEventListener('keydown', onEscKeyPress);
    showModal.classList.add('is-open');
    const filmId = evt.srcElement.parentElement.id;
    searchedData(filmId);
  };
};

function onModalClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  showModal.classList.remove('is-open');
}
// Закриваємо модальне вікно при кліку на бекдроп
showModal.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  };
};
// Закриття модального вікна при кліку на ESC (події клавіатури обробляються на документі, а не на конкретному елементі)

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    onModalClose();
  };
};
// Закриваємо модальне вікно при кліку на кнопку
closeBtn.addEventListener('click', onModalClose);
