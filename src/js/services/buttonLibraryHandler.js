import { appendGallery } from './card';


const formLibraryRef = document.querySelector('#libraryForm');

export default function btnLibraryHandler(functionRender, renderDefault) {
  formLibraryRef.addEventListener('change', onButtonClick);

  function onButtonClick(e) {
    e.preventDefault();
    console.log('поменяли кнопку');

    if (watchedRef.checked) {
      const watchedFilms = JSON.parse(localStorage.getItem('watched'));
      if (!watchedFilms) {
        console.log('отображаем заглушку');
        // renderDefault()
        // викликаємо функцію рендеру заглушки
      } else {
        //  functionRender(watchedFilms)
        console.log('рендерим watchedFilms', watchedFilms);
      }
    } else {
      const queueFilms = JSON.parse(localStorage.getItem('queue'));
      if (!queueFilms) {
        console.log('отображаем заглушку');
        // renderDefault()
        // викликаємо функцію рендеру заглушки
      } else {
        //  functionRender(queueFilms)
        console.log('рендерим queueuFilms', queueFilms);
      }
    }
  }
}


// import localStorageAPI from './local-storage-api.js'


const filmWatched = [
  {
    "adult": false,
    "backdrop_path": "/lbLPVvgq16BD3IA6sIH3riu9ouO.jpg",
    "id": 762504,
    "title": "Nope",
    "original_language": "en",
    "original_title": "Nope",
    "overview": "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
    "poster_path": "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
    "media_type": "movie",
    "genre_ids": [
      27,
      9648,
      878,
      53
    ],
    "popularity": 1419.195,
    "release_date": "2022-07-20",
    "video": false,
    "vote_average": 7.108,
    "vote_count": 802
  },
  {
    "adult": false,
    "backdrop_path": "/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg",
    "id": 507086,
    "title": "Jurassic World Dominion",
    "original_language": "en",
    "original_title": "Jurassic World Dominion",
    "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
    "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    "media_type": "movie",
    "genre_ids": [
      12,
      28,
      878
    ],
    "popularity": 3733.899,
    "release_date": "2022-06-01",
    "video": false,
    "vote_average": 7.09,
    "vote_count": 3068
  }

]

const filmQueue = [
  {
    adult: false,
    backdrop_path: '/5FFpcmPzD5mhLom7bymZq7Py8eT.jpg',
    id: 862551,
    title: 'Me Time',
    original_language: 'en',
    original_title: 'Me Time',
    overview:
      'With his family away, a devoted stay-at-home dad enjoys his first me time in years by joining his hard-partying old friend on a wild birthday adventure.',
    poster_path: '/bkjPoisqAavXUvtoirxTEcLLQyI.jpg',
    media_type: 'movie',
    genre_ids: [35],
    popularity: 139.203,
    release_date: '2022-08-26',
    video: false,
    vote_average: 5.805,
    vote_count: 105,
  },
];

localStorage.setItem('watched', JSON.stringify(filmWatched));
localStorage.setItem('queue', JSON.stringify(filmQueue));

watchedRef.addEventListener('click', onButtonClick);
queueRef.addEventListener('click', onQueueClick);
libraryLink.addEventListener('click', onLibraryWatched);

function onLibraryWatched(event) {
  event.preventDefault();
  console.log('поменяли кнопку');
  watchedRef.classList.add('checked');

  queueRef.classList.remove('checked');
  notification.innerHTML = '';

  const watchedFilms = JSON.parse(localStorage.getItem('watched'));
  // const watchedFilms = localStorageAPI.getMovies("fetchedMovies");

  const list = document.querySelector('.collection__list')
  const watchedRef = document.querySelector('#Watched')
  const QueueRef = document.querySelector('#Queue')
  const libraryLink = document.querySelector('.library')
  const collection = document.querySelector('.collection')
  const notification = document.querySelector('.notification')

  if (watchedFilms.length === 0) {
    console.log('отображаем заглушку');
    list.innerHTML = '';


    notFound();
  } else {
    list.innerHTML = '';
    console.log('рендерим watchedFilms', watchedFilms);
    const markupOneCard = appendGallery(watchedFilms);
  }
}

function onButtonClick(event) {
  event.preventDefault();
  console.log('поменяли кнопку');
  watchedRef.classList.add('checked');
  watchedRef.addEventListener('click', onButtonClick)
  QueueRef.addEventListener('click', onQueueClick)
  libraryLink.addEventListener('click', onLibraryWatched)

  queueRef.classList.remove('checked');
  notification.innerHTML = '';

  const watchedFilms = JSON.parse(localStorage.getItem('watched'));
  // const watchedFilms = localStorageAPI.getMovies("fetchedMovies");


  if (watchedFilms.length === 0) {
    console.log('отображаем заглушку');
    list.innerHTML = '';

    notFound();
  } else {
    list.innerHTML = '';
    console.log('рендерим watchedFilms', watchedFilms);
    const markupOneCard = appendGallery(watchedFilms);
  }
}

function onQueueClick(event) {
  event.preventDefault();
  queueRef.classList.add('checked');
  watchedRef.classList.remove('checked');

  notification.innerHTML = '';

  const queueFilms = JSON.parse(localStorage.getItem('queue'));
  if (queueFilms.length === 0) {
    console.log('отображаем заглушку');
    function onLibraryWatched(event) {
      event.preventDefault()
      console.log('поменяли кнопку')
      watchedRef.classList.add('checked')

      QueueRef.classList.remove('checked')
      notification.innerHTML = "";

      const watchedFilms = JSON.parse(localStorage.getItem('watched'))
      // const watchedFilms = localStorageAPI.getMovies("fetchedMovies");

      if (watchedFilms.length === 0) {
        console.log('отображаем заглушку')
        list.innerHTML = "";

        notFound();

      } else {
        list.innerHTML = "";
        console.log('рендерим watchedFilms', watchedFilms)
        const markupOneCard = appendGallery(watchedFilms);
      }


    }

    function onButtonClick(event) {
      event.preventDefault()
      console.log('поменяли кнопку')
      watchedRef.classList.add('checked')

      QueueRef.classList.remove('checked')
      notification.innerHTML = "";

      const watchedFilms = JSON.parse(localStorage.getItem('watched'))
      // const watchedFilms = localStorageAPI.getMovies("fetchedMovies");

      if (watchedFilms.length === 0) {
        console.log('отображаем заглушку')
        list.innerHTML = "";

        notFound();

      } else {
        list.innerHTML = "";
        console.log('рендерим watchedFilms', watchedFilms)
        const markupOneCard = appendGallery(watchedFilms);
      }

    }


    function onQueueClick(event) {
      event.preventDefault();
      QueueRef.classList.add('checked')
      watchedRef.classList.remove('checked')

      notification.innerHTML = "";

      const queueFilms = JSON.parse(localStorage.getItem('queue'))
      if (queueFilms.length === 0) {
        console.log('отображаем заглушку')

        list.innerHTML = "";
        notFound();
      } else {
        list.innerHTML = '';
        console.log('рендерим queueuFilms', queueFilms);
        const markupOneCard = appendGallery(queueFilms);
      }
    }

    function notFound() {
      const notificationText = document.createElement('p');
      notificationText.classList.add('notification-text');
      notificationText.innerHTML = "Oops, you haven't added anything yet...";
      notification.appendChild(notificationText);
    }
  }
}
