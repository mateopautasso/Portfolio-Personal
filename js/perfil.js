const logoPrincipal = document.querySelector('.header-section__img');
const sobreMi = document.querySelector(".header-section__sobre-mi-a");

const aMailto = document.getElementById('mailto');
const formContact = document.getElementById('form-contact') 
const submitInput = document.getElementById('send');

const aContactCorreo = document.querySelector('.contact-container__a');
const arrowLeft = document.querySelector('.form-contact__icon-close');
aContactCorreo.addEventListener('click', displayActive);
arrowLeft.addEventListener('click', displayInactive);

sobreMi.addEventListener('mousemove', scaleActive)
sobreMi.addEventListener('mouseout', scaleInactive)

logoPrincipal.addEventListener('mousemove', rotateActive)
logoPrincipal.addEventListener('mouseout', rotateInactive)

formContact.addEventListener('submit', handleSubmit);


function rotateActive() {
    logoPrincipal.classList.add('rotate-active')
}

function rotateInactive() {
    logoPrincipal.classList.remove('rotate-active')
}

function scaleActive (){
    sobreMi.classList.add('scale-active');
    sobreMi.classList.remove('scale-inactive');
}

function scaleInactive() {
    sobreMi.classList.remove('scale-active');
    sobreMi.classList.add('scale-inactive');
}

function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData(formContact)
    let name = formData.get('name');
    let email = formData.get('email');
    let message = formData.get('message');
    aMailto.setAttribute('href', `mailto:mateopautassodev@gmail.com?subject=${name} - ${email}&body=${message}`)
    aMailto.click();
    displayInactive();
}

function displayInactive() {
    formContact.classList.add('form-display-inactive')
    formContact.classList.add('form-display-active')
}

function displayActive() {
    formContact.classList.add('form-display-active')
    formContact.classList.remove('form-display-inactive')
}