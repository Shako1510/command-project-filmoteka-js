// import MoviesApiService from './moviesAPIService';
// const moviesApiService = new MoviesApiService();
// const gallery = document.querySelector('.collection__list');
// const refs = {
//   searchForm: document.querySelector('#search-form'),
//   inputEl: document.querySelector('.form-input'),
// };

// refs.searchForm.addEventListener('submit', onSearchMovie);

// function onSearchMovie(e) {
//   e.preventDefault();
//   clearContainer();
//   query = refs.inputEl.value;
//   console.log(query);
//   moviesApiService.resetPage();
//   moviesApiService.fetchMoviesByQuery(query).then(appendGallery);
// }

// function appendGallery(results) {
//   const markupOneCard = results
//     .map(movie => {
//       return `
//             <li class="collection__item">
//             <div class="card">
//             <a href="" class="card__link" >
//           <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${
//             movie.poster_path
//           }" alt="" >
//           <div class="card__wrap">
//              <h2 class="card__title" >${movie.title}</h2>
//           <div class="card__data">
//         <ul class="card__genres">
//           <li class="card__genre">lhfvf</li>
//           <li class="card__genre"></li>
//           <li class="card__genre"></li>
//                   </ul>
//         <p class="card__year card__text">|${movie.release_date.slice(0, 4)} </p>
//               </div>
//     </div>
//     </a>
//             </div>

//             </li>
//      `;
//     })
//     .join('');
//   gallery.insertAdjacentHTML('beforeend', markupOneCard);
// }
// function clearContainer() {
//   gallery.innerHTML = '';
// }
