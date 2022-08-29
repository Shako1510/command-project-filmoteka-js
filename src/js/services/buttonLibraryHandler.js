const filmWatched = [
    {
        title: 'watched'
    },
    {
        title: 'batman'
    }
] 
const filmQueue = [
    {
        title: 'queue'
    },
    {
        title: 'batman'
    }
] 
localStorage.setItem('watched', JSON.stringify(filmWatched))
// localStorage.setItem('queue', JSON.stringify(filmQueue))



const WatchedRef = document.querySelector('#Watched')
const QueueRef = document.querySelector('#Queue')
const formLibraryRef = document.querySelector('#libraryForm')


   
     export default function inputHandler (functionRender) {


        formLibraryRef.addEventListener('change', onButtonClick )


        function onButtonClick(e){
            e.preventDefault()
            console.log('поменяли кнопку')
        
            if (WatchedRef.checked) {
                const watchedFilms = JSON.parse(localStorage.getItem('watched')) 
                if (!watchedFilms) {
                    console.log('отображаем заглушку')
                }
                if (watchedFilms){
            //  functionRender(watchedFilms)
            console.log('рендерим watchedFilms', watchedFilms)
                }
             } else {
                const queueFilms = JSON.parse(localStorage.getItem('queue')) 
                if (!queueFilms) {
                    console.log('отображаем заглушку')
                }
                if (queueFilms){
            //  functionRender(queueFilms)
            console.log('рендерим queueuFilms', queueFilms)
                }
             }
        }
        
        
     }