import { appendGallery } from './card';
import localStorageAPI from './local-storage-api.js'
const storage = new localStorageAPI();
const list = document.querySelector('.collection__list');
const watchedRef = document.querySelector('#Watched');
const queueRef = document.querySelector('#Queue');
const libraryLink = document.querySelector('.library');
const notification = document.querySelector('.notification');
watchedRef.addEventListener('click', onButtonClick);
queueRef.addEventListener('click', onQueueClick);
libraryLink.addEventListener('click', onLibraryWatched);
function onLibraryWatched(event) {
  event.preventDefault();
  watchedRef.classList.add('checked');
  queueRef.classList.remove('checked');
  notification.innerHTML = '';
  const watchedFilms = storage.getMovies("watched");
  if (watchedFilms.length === 0) {
    list.innerHTML = '';
    notFound();
  } else {
    list.innerHTML = '';
    const markupOneCard = appendGallery(watchedFilms);
  }
}
function onButtonClick(event) {
  event.preventDefault();
  watchedRef.classList.add('checked');
  queueRef.classList.remove('checked');
  notification.innerHTML = '';
  const watchedFilms = storage.getMovies("watched");
  if (watchedFilms.length === 0) {
    list.innerHTML = '';
    notFound();
  } else {
    list.innerHTML = '';
    const markupOneCard = appendGallery(watchedFilms);
  }
}
function onQueueClick(event) {
  event.preventDefault();
  queueRef.classList.add('checked');
  watchedRef.classList.remove('checked');
  notification.innerHTML = '';
  const queueFilms = storage.getMovies("queue");
  if (queueFilms.length === 0) {
    list.innerHTML = '';
    notFound();
  } else {
    list.innerHTML = '';
    const markupOneCard = appendGallery(queueFilms);
  }
}
function notFound() {
  const notificationText = document.createElement('p');
  notificationText.classList.add('notification-text');
  notificationText.innerHTML = "Oops, you didn't add anything yet...";
  notification.appendChild(notificationText);
}