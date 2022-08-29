import MoviesApiService from './moviesAPIService';
const moviesApiService = new MoviesApiService();

const openModalDescription = document.querySelector('.cards');
const showModal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('.modal-close__btn');
const modal = document.querySelector('.modal');

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
                        <td></td>
                        <td class="table__data"><span class="table-data__raiting">${data.vote_average}</span> / <span
                                class="table-data__scores">${data.vote_count}</span></td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__description">Popularity</td>
                        <td></td>
                        <td class="table__data">${data.popularity}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__description">Original Title</td>
                        <td></td>
                        <td class="table__data">${data.original_title}</td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__description">Genre</td>
                        
                        <td class="table__data">${data.genre_ids}</td>
                    </tr>
                </table>
                <p class="modal-container__title">ABOUT</p>
                <p class="modal-title__description">${data.overview}</p>
                <div class="modal-conteiner__btn">
                    <button type="button" class="modal-conteiner__first-btn">add to Watched</button>
                    <button type="button" class="modal-conteiner__second-btn">add to queue</button>
                </div>
            </div>`;

  return (modal.innerHTML = markup);
}

async function searchedData(id) {
  try {
    const data = await moviesApiService.fetchMovieDetails(id);
    console.log(data);

    const markup = await makeMarkup(data);
    return markup;
  } catch (error) {
    console.error(error);
  }
}

// Відкриваємо модальне вікно при кліку на картку
openModalDescription.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target.closest('.movie__link')) {
    showModal.classList.remove('is-hidden');
    showModal.classList.add('is-open');
    const filmId = evt.srcElement.parentElement.id;
    searchedData(filmId);
  }
});
// Закриваємо модальне вікно при кліку на бекдроп
showModal.addEventListener('click', evt => {
  if (evt.currentTarget === evt.target) {
    showModal.classList.remove('is-open');
    showModal.classList.add('is-hidden');
  }
});

// Закриття модального вікна при кліку на ESC (події клавіатури обробляються на документі, а не на конкретному елементі)
document.addEventListener('keydown', evt => {
  if (evt.code === 'Escape') {
    showModal.classList.remove('is-open');
    showModal.classList.add('is-hidden');
  }
 
});
// Закриваємо модальне вікно при кліку на кнопку
closeBtn.addEventListener('click', () => {
  showModal.classList.remove('is-open');
  showModal.classList.add('is-hidden');
});
