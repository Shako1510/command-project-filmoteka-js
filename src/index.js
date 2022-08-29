
import "./js/services/modal";
import MoviesApiService from './js/services/moviesAPIService'

const moviesApiService = new MoviesApiService()
import MoviesApiService from './js/services/moviesAPIService';
import './partials/main-section';
import { PaginationHandler } from './js/services/paginationHandler';
import inputHandler from './js/services/inputHandler'

import './js/services/card';
const moviesApiService = new MoviesApiService();

console.log(moviesApiService);

const pagination = new PaginationHandler(
  15,
  document.querySelector('.pagination__root')
);

pagination.initPagination();


pagination.addEventListener('pageChanged', pageNumber =>
  console.log('choosenPage is: ', pageNumber)
);


// inputHandler() Анастасія - параметром сюди передайте свою функцію по рендерінгу, і має спрацювати
