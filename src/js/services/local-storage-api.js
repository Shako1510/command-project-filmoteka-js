
// import moviesAPIService from './moviesAPIService';
// const getFilms = new moviesAPIService();

export default class LocalStorageAPI {

  constructor (){
    
  }

  // Отримання даних за ключем. Повертає дані, або null
  loadData(key) {
    const localStorageData = localStorage.getItem(key);
    return JSON.parse(localStorageData);
  };

  // Запис даних до сховища. Записує дані з ключем key
  saveData(key, value) {
   
    const dataToSave = JSON.stringify(value);
    localStorage.setItem(key, dataToSave);
    return 'ok';
  };

  // Отримання колекції фільмів. Повертає масив фільмів, або порожній масив з його попереднім записом до сховища
  getMovies(key, page) {
    const movies = this.loadData(key); // отр 
    const totalPages = this.getTotalPage(movies);
    const result = {movies: this.getPaginationPage(movies, page), totalPages};
      return result;
  };
  

  // Додавання фільмів до колекції. Додає новий елемент до поточної колекції фільмів у сховищі
  setMovie(key, value) {

   try {
    const currentCollection = this.getMovies(key);
    currentCollection.push(value);
    return this.saveData(key, currentCollection);
    
   } catch (error) {
    console.log(error.name);
    console.log(error.message);
    
   }
  
  };

  removeMovie(key, value) {
    const currentCollection = this.getMovies(key);
    const indexToRemove = currentCollection.indexOf(value);

    if (indexToRemove >= 0) {
      currentCollection.splice(indexToRemove, 1);
      this.saveData(key, currentCollection);
    }
  };

  getTotalPages(movies) {
      return Math.ceil(movies.length / 20);
    };

    getPaginationPage(page, array ){

     const perPage = 20;
     let start = (page - 1) * perPage;
     let end = start + perPage;
     return array.slice(start, end);
    
    };
    
  createGenres(array){

    const genres = this.loadData('genres');
      return array
        .map(id => genres.find(element => element.id === id))
        .map(item => item.name);
  };
};


 