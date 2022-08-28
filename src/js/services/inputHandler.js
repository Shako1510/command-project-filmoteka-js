import MoviesApiService from './moviesAPIService';

const moviesApiService = new MoviesApiService();
  
const searchForm = document.querySelector('#search-form');
const notification = document.querySelector('.form-warning')

console.log(notification)

export default function inputHandler (functionRender) {

searchForm.addEventListener('submit', onFormSubmit);
  
   async function onFormSubmit(e) {
    e.preventDefault();
  
    notification.classList.add('form-warning--hide')
    moviesApiService.searchQuery = e.currentTarget.elements.query.value.trim();
   
    if (
      moviesApiService.searchQuery === null ||
      moviesApiService.searchQuery === ``
    ) {
      return;
    }
  
    try {
      const movieByQuert = await moviesApiService.fetchMoviesByQuery(moviesApiService.searchQuery);
      if (movieByQuert.results.length === 0){

        notification.classList.remove('form-warning--hide')
        return
      }
    } catch (error) {
      console.log(error);
    }
  
    functionRender(movieByQuert)

    searchForm.reset();
  }
}