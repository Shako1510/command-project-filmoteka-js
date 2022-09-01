// import { renderDefault } from './libraryRending';

// const notification = document.querySelector('.notification');

// const filmWatched = [
//   {
//     adult: false,
//     backdrop_path: '/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg',
//     id: 361743,
//     title: 'Top Gun: Maverick',
//     original_language: 'en',
//     original_title: 'Top Gun: Maverick',
//     // "overview": "After more than thirty years of service as one of the Navy's top aviators, and dodging the advancement in rank that would ground him, Pete "Maverick" Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
//     poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
//     media_type: 'movie',
//     genre_ids: [28, 18],
//     popularity: 4724.785,
//     release_date: '2022-05-24',
//     video: false,
//     vote_average: 8.372,
//     vote_count: 3005,
//   },
//   {
//     adult: false,
//     backdrop_path: '/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg',
//     id: 629176,
//     title: 'Samaritan',
//     original_language: 'en',
//     original_title: 'Samaritan',
//     overview:
//       'Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.',
//     poster_path: '/zgH8Ej50n2cvJCMJrxd4twEwSqz.jpg',
//     media_type: 'movie',
//     genre_ids: [28, 18, 878, 14],
//     popularity: 686.637,
//     release_date: '2022-08-25',
//     video: false,
//     vote_average: 6.67,
//     vote_count: 283,
//   },
//   {
//     adult: false,
//     backdrop_path: '/lbLPVvgq16BD3IA6sIH3riu9ouO.jpg',
//     id: 762504,
//     title: 'Nope',
//     original_language: 'en',
//     original_title: 'Nope',
//     overview:
//       'Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.',
//     poster_path: '/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg',
//     media_type: 'movie',
//     genre_ids: [27, 9648, 878, 53],
//     popularity: 1419.195,
//     release_date: '2022-07-20',
//     video: false,
//     vote_average: 7.108,
//     vote_count: 802,
//   },
//   {
//     adult: false,
//     backdrop_path: '/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg',
//     id: 539681,
//     title: 'DC League of Super-Pets',
//     original_language: 'en',
//     original_title: 'DC League of Super-Pets',
//     overview:
//       'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
//     poster_path: '/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
//     media_type: 'movie',
//     genre_ids: [16, 28, 10751, 878, 35],
//     popularity: 3307.165,
//     release_date: '2022-07-27',
//     video: false,
//     vote_average: 7.551,
//     vote_count: 236,
//   },
//   {
//     adult: false,
//     backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
//     id: 766507,
//     title: 'Prey',
//     original_language: 'en',
//     original_title: 'Prey',
//     overview:
//       'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
//     poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
//     media_type: 'movie',
//     genre_ids: [53, 28],
//     popularity: 6874.014,
//     release_date: '2022-08-02',
//     video: false,
//     vote_average: 8.041,
//     vote_count: 3249,
//   },
//   {
//     adult: false,
//     backdrop_path: '/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg',
//     id: 507086,
//     title: 'Jurassic World Dominion',
//     original_language: 'en',
//     original_title: 'Jurassic World Dominion',
//     overview:
//       "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
//     poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
//     media_type: 'movie',
//     genre_ids: [12, 28, 878],
//     popularity: 3733.899,
//     release_date: '2022-06-01',
//     video: false,
//     vote_average: 7.09,
//     vote_count: 3068,
//   },
//   {
//     adult: false,
//     backdrop_path: '/5FFpcmPzD5mhLom7bymZq7Py8eT.jpg',
//     id: 862551,
//     title: 'Me Time',
//     original_language: 'en',
//     original_title: 'Me Time',
//     overview:
//       'With his family away, a devoted stay-at-home dad enjoys his first me time in years by joining his hard-partying old friend on a wild birthday adventure.',
//     poster_path: '/bkjPoisqAavXUvtoirxTEcLLQyI.jpg',
//     media_type: 'movie',
//     genre_ids: [35],
//     popularity: 139.203,
//     release_date: '2022-08-26',
//     video: false,
//     vote_average: 5.805,
//     vote_count: 105,
//   },
//   {
//     adult: false,
//     backdrop_path: '/6cpRpfD3isvluFwXDGSiDVyibPJ.jpg',
//     id: 829560,
//     title: 'The Next 365 Days',
//     original_language: 'pl',
//     original_title: 'Kolejne 365 dni',
//     overview:
//       "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
//     poster_path: '/dlyzCeI8wojBsUWdkNdO5AXtmZq.jpg',
//     media_type: 'movie',
//     genre_ids: [10749, 18],
//     popularity: 2166.868,
//     release_date: '2022-08-19',
//     video: false,
//     vote_average: 6.886,
//     vote_count: 312,
//   },
//   {
//     adult: false,
//     backdrop_path: '/wDyM1lIIgK4RIDAgr8iuZe9N1cf.jpg',
//     id: 755566,
//     title: 'Day Shift',
//     original_language: 'en',
//     original_title: 'Day Shift',
//     overview:
//       "An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.",
//     poster_path: '/bI7lGR5HuYlENlp11brKUAaPHuO.jpg',
//     media_type: 'movie',
//     genre_ids: [28, 14, 27, 35],
//     popularity: 2915.738,
//     release_date: '2022-08-10',
//     video: false,
//     vote_average: 6.881,
//     vote_count: 730,
//   },
//   {
//     adult: false,
//     backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
//     id: 438148,
//     title: 'Minions: The Rise of Gru',
//     original_language: 'en',
//     original_title: 'Minions: The Rise of Gru',
//     overview:
//       'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
//     poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
//     media_type: 'movie',
//     genre_ids: [16, 12, 35, 14],
//     popularity: 3747.877,
//     release_date: '2022-06-29',
//     video: false,
//     vote_average: 7.712,
//     vote_count: 1670,
//   },
//   {
//     adult: false,
//     backdrop_path: '/xyS0NgcQ2pbGWcwvSSu3xKEBhoO.jpg',
//     id: 614934,
//     title: 'Elvis',
//     original_language: 'en',
//     original_title: 'Elvis',
//     overview:
//       'The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.',
//     poster_path: '/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg',
//     media_type: 'movie',
//     genre_ids: [10402, 18, 36],
//     popularity: 697.476,
//     release_date: '2022-06-22',
//     video: false,
//     vote_average: 7.911,
//     vote_count: 1246,
//   },
//   {
//     adult: false,
//     backdrop_path: '/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg',
//     id: 760161,
//     title: 'Orphan: First Kill',
//     original_language: 'en',
//     original_title: 'Orphan: First Kill',
//     // "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous "child" at any cost.",
//     poster_path: '/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg',
//     media_type: 'movie',
//     genre_ids: [27, 53],
//     popularity: 1210.144,
//     release_date: '2022-07-27',
//     video: false,
//     vote_average: 7.204,
//     vote_count: 334,
//   },
// ];
// const filmQueue = [
  {
    adult: false,
    backdrop_path: '/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg',
    id: 361743,
    title: 'Top Gun: Maverick',
    original_language: 'en',
    original_title: 'Top Gun: Maverick',
    // "overview": "After more than thirty years of service as one of the Navy's top aviators, and dodging the advancement in rank that would ground him, Pete "Maverick" Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    media_type: 'movie',
    genre_ids: [28, 18],
    popularity: 4724.785,
    release_date: '2022-05-24',
    video: false,
    vote_average: 8.372,
    vote_count: 3005,
  },
  {
    adult: false,
    backdrop_path: '/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg',
    id: 629176,
    title: 'Samaritan',
    original_language: 'en',
    original_title: 'Samaritan',
    overview:
      'Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.',
    poster_path: '/zgH8Ej50n2cvJCMJrxd4twEwSqz.jpg',
    media_type: 'movie',
    genre_ids: [28, 18, 878, 14],
    popularity: 686.637,
    release_date: '2022-08-25',
    video: false,
    vote_average: 6.67,
    vote_count: 283,
  },
  {
    adult: false,
    backdrop_path: '/lbLPVvgq16BD3IA6sIH3riu9ouO.jpg',
    id: 762504,
    title: 'Nope',
    original_language: 'en',
    original_title: 'Nope',
    overview:
      'Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.',
    poster_path: '/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg',
    media_type: 'movie',
    genre_ids: [27, 9648, 878, 53],
    popularity: 1419.195,
    release_date: '2022-07-20',
    video: false,
    vote_average: 7.108,
    vote_count: 802,
  },
  {
    adult: false,
    backdrop_path: '/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg',
    id: 539681,
    title: 'DC League of Super-Pets',
    original_language: 'en',
    original_title: 'DC League of Super-Pets',
    overview:
      'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
    poster_path: '/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
    media_type: 'movie',
    genre_ids: [16, 28, 10751, 878, 35],
    popularity: 3307.165,
    release_date: '2022-07-27',
    video: false,
    vote_average: 7.551,
    vote_count: 236,
  },
  {
    adult: false,
    backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
    id: 766507,
    title: 'Prey',
    original_language: 'en',
    original_title: 'Prey',
    overview:
      'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
    poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
    media_type: 'movie',
    genre_ids: [53, 28],
    popularity: 6874.014,
    release_date: '2022-08-02',
    video: false,
    vote_average: 8.041,
    vote_count: 3249,
  },
  {
    adult: false,
    backdrop_path: '/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg',
    id: 507086,
    title: 'Jurassic World Dominion',
    original_language: 'en',
    original_title: 'Jurassic World Dominion',
    overview:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
    poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
    media_type: 'movie',
    genre_ids: [12, 28, 878],
    popularity: 3733.899,
    release_date: '2022-06-01',
    video: false,
    vote_average: 7.09,
    vote_count: 3068,
  },
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
  {
    adult: false,
    backdrop_path: '/6cpRpfD3isvluFwXDGSiDVyibPJ.jpg',
    id: 829560,
    title: 'The Next 365 Days',
    original_language: 'pl',
    original_title: 'Kolejne 365 dni',
    overview:
      "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
    poster_path: '/dlyzCeI8wojBsUWdkNdO5AXtmZq.jpg',
    media_type: 'movie',
    genre_ids: [10749, 18],
    popularity: 2166.868,
    release_date: '2022-08-19',
    video: false,
    vote_average: 6.886,
    vote_count: 312,
  },
  {
    adult: false,
    backdrop_path: '/wDyM1lIIgK4RIDAgr8iuZe9N1cf.jpg',
    id: 755566,
    title: 'Day Shift',
    original_language: 'en',
    original_title: 'Day Shift',
    overview:
      "An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.",
    poster_path: '/bI7lGR5HuYlENlp11brKUAaPHuO.jpg',
    media_type: 'movie',
    genre_ids: [28, 14, 27, 35],
    popularity: 2915.738,
    release_date: '2022-08-10',
    video: false,
    vote_average: 6.881,
    vote_count: 730,
  },
  {
    adult: false,
    backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
    id: 438148,
    title: 'Minions: The Rise of Gru',
    original_language: 'en',
    original_title: 'Minions: The Rise of Gru',
    overview:
      'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
    poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    media_type: 'movie',
    genre_ids: [16, 12, 35, 14],
    popularity: 3747.877,
    release_date: '2022-06-29',
    video: false,
    vote_average: 7.712,
    vote_count: 1670,
  },
  {
    adult: false,
    backdrop_path: '/xyS0NgcQ2pbGWcwvSSu3xKEBhoO.jpg',
    id: 614934,
    title: 'Elvis',
    original_language: 'en',
    original_title: 'Elvis',
    overview:
      'The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.',
    poster_path: '/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg',
    media_type: 'movie',
    genre_ids: [10402, 18, 36],
    popularity: 697.476,
    release_date: '2022-06-22',
    video: false,
    vote_average: 7.911,
    vote_count: 1246,
  },
  {
    adult: false,
    backdrop_path: '/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg',
    id: 760161,
    title: 'Orphan: First Kill',
    original_language: 'en',
    original_title: 'Orphan: First Kill',
    // "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous "child" at any cost.",
    poster_path: '/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg',
    media_type: 'movie',
    genre_ids: [27, 53],
    popularity: 1210.144,
    release_date: '2022-07-27',
    video: false,
    vote_average: 7.204,
    vote_count: 334,
  },
// ];
// // localStorage.setItem('watched', JSON.stringify(filmWatched));
// localStorage.setItem('queue', JSON.stringify(filmQueue));

// const WatchedRef = document.querySelector('#Watched');
// const formLibraryRef = document.querySelector('#libraryForm');

// export default function btnLibraryHandler(functionRender, renderDefault) {
//   formLibraryRef.addEventListener('change', onButtonClick);

//   function onButtonClick(e) {
//     // e.preventDefault();
//     console.log('поменяли кнопку');

//     if (WatchedRef.checked) {
//       const watchedFilms = JSON.parse(localStorage.getItem('watched'));
//       console.log(watchedFilms);
//       if (!watchedFilms) {
//         console.log('отображаем заглушку');
//         renderDefault();
//         // викликаємо функцію рендеру заглушки
//       } else {
//         functionRender(watchedFilms);
//         console.log('рендерим watchedFilms', watchedFilms);
//       }
//     } else {
//       const queueFilms = JSON.parse(localStorage.getItem('queue'));
//       if (!queueFilms) {
//         console.log('отображаем заглушку');
//         renderDefault();
//         // викликаємо функцію рендеру заглушки
//       } else {
//         functionRender(queueFilms);
//         console.log('рендерим queueuFilms', queueFilms);
//       }
//     }
//   }
// }

// function functionRender(data) {
//   notification.innerHTML = '';

//   console.log(data.results);
//   clearContainer();
//   const markupOneCard = data.results
//     .map(movie => {
//       const genresMovie = createGenres(movie.genre_ids, genres);
//       // console.log(genresMovie);
//       let genreRender = [];
//       if (genresMovie.length > 3) {
//         genreRender = genresMovie.slice(0, 2);
//         genreRender.push('Other');
//         genreRender = genreRender.join(', ');
//       } else {
//         genreRender = genresMovie.join(', ');
//       }
//       let date = '';
//       if (movie.release_date) {
//         date = movie.release_date.slice(0, 4);
//       }

//       return `
//             <li class="collection__item">
//             <div class="card">
//             <a href="" class="card__link" id="${movie.id}">
//           <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}"onerror="this.onerror=null;this.src='https://ih1.redbubble.net/image.3553185369.0580/st,small,507x507-pad,600x600,f8f8f8.jpg'" loading="lazy" alt="" >
//           <div class="card__wrap">
//              <h2 class="card__title" >${movie.title}</h2>
//           <div class="card__data">

//           <p class="card__genre">${genreRender}</p>

//         <p class="card__year card__text">&nbsp | ${date}</p>
//               </div>
//     </div></a>

//             </div>
//             </li>
//      `;
//     })
//     .join('');
//   gallery.insertAdjacentHTML('beforeend', markupOneCard);

//   const pagination = new PaginationHandler(
//     data.page,
//     data.totalPage,
//     document.querySelector('.pagination__root')
//   );

//   pagination.initPagination();

//   //  // adding listener of choosing page by pagination

//   pagination.addEventListener('pageChanged', onSearchMovie);
// }

// function onLibraryWatched(event) {
//   // event.preventDefault();
//   // watchedRef.classList.add('checked');
//   // queueRef.classList.remove('checked');
//   // notification.innerHTML = '';
//   // const watchedFilms = JSON.parse(localStorage.getItem('watched'));
//   const watchedFilms = storage.getMovies("watched");
//   if (watchedFilms.length === 0) {
//     list.innerHTML = '';
//     notFound();
//   } else {
//     list.innerHTML = '';
//     const markupOneCard = appendGallery(watchedFilms);
//   }
// }
// function onButtonClick(event) {
//   event.preventDefault();
//   watchedRef.classList.add('checked');
//   queueRef.classList.remove('checked');
//   notification.innerHTML = '';
//   // const watchedFilms = JSON.parse(localStorage.getItem('watched'));
//   const watchedFilms = storage.getMovies("watched");
//   if (watchedFilms.length === 0) {
//     list.innerHTML = '';
//     notFound();
//   } else {
//     list.innerHTML = '';
//     const markupOneCard = appendGallery(watchedFilms);
//   }
// }
// function onQueueClick(event) {
//   event.preventDefault();
//   queueRef.classList.add('checked');
//   watchedRef.classList.remove('checked');
//   notification.innerHTML = '';
//   const queueFilms = storage.getMovies("queue");
//   // const queueFilms = JSON.parse(localStorage.getItem('queue'));
//   if (queueFilms.length === 0) {
//     list.innerHTML = '';
//     notFound();
//   } else {
//     list.innerHTML = '';
//     const markupOneCard = appendGallery(queueFilms);
//   }
// }
