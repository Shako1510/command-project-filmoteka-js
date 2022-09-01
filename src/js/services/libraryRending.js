// const notification = document.querySelector('.notification');

// export function renderDefault() {
//   const notificationText = document.createElement('p');
//   notificationText.classList.add('notification-text');
//   notificationText.innerHTML = "Oops, you didn't add anything yet...";
//   notification.appendChild(notificationText);
// }

// export function functionRender(data) {
//   console.log(data);
//   // clearContainer();
//   const markupOneCard = data
//     .map(movie => {
//       // const genresMovie = createGenres(movie.genre_ids, genres);
//       // console.log(genresMovie);
//       // let genreRender = [];
//       // if (genresMovie.length > 3) {
//       //   genreRender = genresMovie.slice(0, 2);
//       //   genreRender.push('Other');
//       //   genreRender = genreRender.join(', ');
//       // } else {
//       //   genreRender = genresMovie.join(', ');
//       // }
//       // let date = '';
//       // if (movie.release_date) {
//       //   date = movie.release_date.slice(0, 4);
//       // }

//       return `
//               <li class="collection__item">
//               <div class="card">
//               <a href="" class="card__link" id="${movie.id}">
//             <img class=" card__img" src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}"onerror="this.onerror=null;this.src='https://ih1.redbubble.net/image.3553185369.0580/st,small,507x507-pad,600x600,f8f8f8.jpg'" loading="lazy" alt="" >
//             <div class="card__wrap">
//                <h2 class="card__title" >${movie.title}</h2>
//             <div class="card__data">

//                 </div>
//       </div></a>

//               </div>
//               </li>
//        `;
//     })
//     .join('');
//   notification.insertAdjacentHTML('beforeend', markupOneCard);

//   // const pagination = new PaginationHandler(
//   //   data.page,
//   //   data.totalPage,
//   //   document.querySelector('.pagination__root')
//   // );

//   // pagination.initPagination();

//   // //  // adding listener of choosing page by pagination

//   // pagination.addEventListener('pageChanged', onSearchMovie);
// }
