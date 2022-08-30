const modal = document.querySelector(`.modal`);
const openButton = document.querySelector(`.footer-text-underline`);
const closeButton = document.querySelector(`.close`);
openButton.addEventListener("click", function(){
    modal.classList.add("is-active");
    modal.classList.remove("is-hidden");
   
    
})
closeButton.addEventListener("click", function(){
    modal.classList.remove("is-active");
    modal.classList.add("is-hidden");
})