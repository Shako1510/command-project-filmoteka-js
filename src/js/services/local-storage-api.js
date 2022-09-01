
export default class LocalStorageAPI {

  constructor() {
    if (!this.loadData('watched')) this.saveData('watched', new Object([]));
    if (!this.loadData('queue')) this.saveData('queue', new Object([]));
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
  getMovies(key, page = 1) {
    const movies = this.loadData(key); // отр 
    const totalPages = this.getTotalPages(movies);
    console.log(totalPages);
    const result = {movies: this.getPaginationPage(page, movies), totalPages};
    console.log(result);
      return result;
  };
  
  // Додавання фільмів до колекції. Додає новий елемент до поточної колекції фільмів у сховищі
  setMovie(key, value) {
   try {
    const currentCollection = this.getMovies(key).movies;
    currentCollection.push(value);
    return this.saveData(key, currentCollection);
    
   } catch (error) {
    console.log(error.name);
    console.log(error.message);
   }
  };

  removeMovie(key, id) {
    const currentCollection = this.getMovies(key).movies;
    const currentCollectionIds = currentCollection.map(item => item.id);
    const indexToRemove = currentCollectionIds.indexOf(id);
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
     console.log(start, end);
     return array.slice(start, end);
    
    };
    
  createGenres(array){
    const genres = this.loadData('genres');
      return array
        .map(id => genres.find(element => element.id === id))
        .map(item => item.name);
  };

    checkMovie(id) {
      let isMovieInLocalStorage = 'no';
      let currentCollection;
      let currentCollectionIds;
      currentCollection = this.getMovies('watched').movies;
      currentCollectionIds = currentCollection.map(item => item.id);
      if (currentCollectionIds.includes(id)) {
        isMovieInLocalStorage = 'watched';
      }
      currentCollection = this.getMovies('queue').movies;
      currentCollectionIds = currentCollection.map(item => item.id);
      if (currentCollectionIds.includes(id)) {
        isMovieInLocalStorage = 'queue';
      }
      return isMovieInLocalStorage;
    }
  };

