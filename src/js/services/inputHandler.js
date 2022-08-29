import MoviesApiService from './moviesAPIService';

const moviesApiService = new MoviesApiService();

const gallery = document.querySelector('.collection__list');
  
const searchForm = document.querySelector('#search-form');
const notification = document.querySelector('.form-warning')

export default function inputHandler (functionRender) {

searchForm.addEventListener('submit', onFormSubmit);
  
   async function onFormSubmit(e) {
    e.preventDefault();
    // clearContainer()
  
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
        searchForm.reset();
        return
      }
      functionRender(movieByQuert.results)
    } catch (error) {
      console.log(error);
    }
    searchForm.reset();
  }
}

// function clearContainer() {
//   gallery.innerHTML = '';
// }
