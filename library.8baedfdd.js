const e=document.querySelector("#Watched"),o=document.querySelector("#libraryForm");!function(){const e=JSON.parse(localStorage.getItem("watched"));e?console.log("рендерим watchedFilms",e):console.log("отображаем заглушку")}(),o.addEventListener("change",(function(o){if(o.preventDefault(),console.log("поменяли кнопку"),e.checked){const e=JSON.parse(localStorage.getItem("watched"));e?console.log("рендерим watchedFilms",e):console.log("отображаем заглушку")}else{const e=JSON.parse(localStorage.getItem("queue"));e?console.log("рендерим queueuFilms",e):console.log("отображаем заглушку")}}));
//# sourceMappingURL=library.8baedfdd.js.map