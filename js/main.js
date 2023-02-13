const body = document.querySelector("body");
const btnEntrar = document.querySelector(".main-index__button");
const h1Index = document.querySelector(".main-index__h1");
const sobreMi = document.querySelector(".header-section__sobre-mi-a");
const logoPrincipal = document.querySelector('.header-section__img');

logoPrincipal.addEventListener('mousemove', rotateActive)
logoPrincipal.addEventListener('mouseout', rotateInactive)
btnEntrar.addEventListener('mousemove', scaleAndBackdropFilterActive);
btnEntrar.addEventListener('mouseout', scaleAndBackdropFilterInactive);
sobreMi.addEventListener('mousemove', scaleActive)
sobreMi.addEventListener('mouseout', scaleInactive)

function rotateActive() {
    logoPrincipal.classList.add('scale-active')
    logoPrincipal.classList.remove('scale-inactive')
}function rotateInactive() {
    logoPrincipal.classList.add('scale-inactive')
    logoPrincipal.classList.remove('scale-active')
}
function scaleAndBackdropFilterActive(){
    body.classList.add('backdrop-filter-active');
    body.classList.remove('backdrop-filter-inactive');
    h1Index.classList.add('scale-active-h1-index');
    h1Index.classList.remove('scale-inactive');
}
function scaleAndBackdropFilterInactive(){
    body.classList.add('backdrop-filter-inactive');
    body.classList.remove('backdrop-filter');
    h1Index.classList.remove('scale-active-h1-index');
    h1Index.classList.add('scale-inactive');
}
function scaleActive (){
    sobreMi.classList.add('scale-active');
    sobreMi.classList.remove('scale-inactive');
}
function scaleInactive() {
    sobreMi.classList.remove('scale-active');
    sobreMi.classList.add('scale-inactive');
}
