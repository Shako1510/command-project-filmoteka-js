import MoviesApiService from './js/services/moviesAPIService'

const moviesApiService = new MoviesApiService()
console.log(moviesApiService)

async function testAPI () {
    try {
        const trendingMovies = await moviesApiService.fetchTrendingMovies()
        console.log(trendingMovies)

     const movieDetails = await moviesApiService.fetchMovieDetails(539681)
     console.log(movieDetails)

     const movieByQuert = await moviesApiService.fetchMoviesByQuery('Lion')
     console.log(movieByQuert)

    } catch  (error) {
        console.log(error);
}
}

testAPI ()
