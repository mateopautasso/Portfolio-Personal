const body = document.querySelector("body");
const btnEntrar = document.querySelector(".main-index__button a");
const h1 = document.querySelector(".main-index__h1");

btnEntrar.addEventListener('mousemove', backdropFilterActive);
btnEntrar.addEventListener('mouseout', backdropFilterInactive);

function backdropFilterActive(){
    body.classList.add('backdrop-filter-active');
    body.classList.remove('backdrop-filter-inactive');
    h1.classList.add('h1-scale-active')
    h1.classList.remove('h1-scale-inactive')
}
function backdropFilterInactive(){
    body.classList.add('backdrop-filter-inactive');
    body.classList.remove('backdrop-filter');
    h1.classList.remove('h1-scale-active')
    h1.classList.add('h1-scale-inactive')
}
