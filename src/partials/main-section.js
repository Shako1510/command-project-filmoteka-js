import MoviesApiService from '../js/services/moviesAPIService'

function renderCardList(data) {
  const markup = data
    .map(
      (item) => `<li class="movie__item">
                <a href="" class="movie__link link">
                    <div id="${item.id}">
                        <img class="movie-cover" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="example">
                        <div class="movie-info">
                            <h1 class="movie-title">${item.original_title}</h1>
                            <p class="movie-genre">${item.genre_ids}</p><span>${item.vote_average}</span>
                        </div>                        
                    </div>
                </a>
            </li>`
    ).join("")
  return markup;
}


const list = document.querySelector('.cards-position');
const moviesApiService = new MoviesApiService()

async function createMarkup() {

  try {
    const data = await moviesApiService.fetchTrendingMovies();
    const result = await data.results;
    const markup = await renderCardList(result);

    list.insertAdjacentHTML('beforeend', markup);



  } catch (error) {
    console.error(error);
  }
}

// createMarkup();
