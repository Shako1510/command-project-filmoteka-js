
// export default localStorageAPI

import fetch from './moviesAPIService';

const getFilms = new fetch();

async function fetchMovie(){
  try { const data = await getFilms.fetchTrendingMovies();
    
  } catch (error) {
    console.log(error);
  }
}

console.log(fetchMovie());

const LocalStorageAPI =  {

  // Отримання даних за ключем. Повертає дані(об єкт), або null
  loadData(key) {
    const localStorageData = localStorage.getItem(key);
    return JSON.parse(localStorageData);
  },

  // Запис даних до сховища. Записує дані з ключем key
  saveData(key, value) {
    const dataToSave = JSON.stringify(value);
    localStorage.setItem(key, dataToSave);
     
    // витягнути масив через лоад дата із локал стредж
    // через пуш дозаписати 
  },

  // Отримання колекції фільмів. Повертає масив фільмів, або порожній масив з його попереднім записом до сховища
  getMovies(key, page) {
    const movies = this.loadData(key); // отр 
    const totalPages = this.getTotalPage(movies);
    const result = {movies: this.getPaginationPage(movies, page), totalPages};

    // if (!movies) {
    //   this.saveData(key, []);
    //   return [];
    // } else {
      return result;
  }, 
  // має повертати масив муві та тотал пейдж (якщо масив більше 20)
  // Додавання фільмів до колекції. Додає новий елемент до поточної колекції фільмів у сховищі
  
  setMovie(key, value) {
    const currentCollection = this.getMovies(key);
    currentCollection.push(value);

    this.saveData(key, currentCollection);
    // return 
    // try catch 
    //перевірити для відкриття, закриття модалки , 
    // певернути статус коли ОК - закрили модалку, якщо ні - то, перший запис
  },

  removeMovie(key, value) {
    const currentCollection = this.getMovies(key);
    const indexToRemove = currentCollection.indexOf(value);

    if (indexToRemove >= 0) {
      currentCollection.splice(indexToRemove, 1);
      this.saveData(key, currentCollection);
    }
  },

  getTotalPages(movies) {
      return Math.ceil(movies.length / 20);
    },

    getPaginationPage(page, array ){

     const perPage = 20;
     let start = (page - 1) * perPage;
     let end = start + perPage;
     return array.slice(start, end);
    
    },
    
  getGenres(key){

    myArray = this.loadData(key);

  }
};

     