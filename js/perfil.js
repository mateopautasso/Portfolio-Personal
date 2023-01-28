const sobreMiPerfil = document.querySelector(".header-section__mis-proyectos-a");

const aMailto = document.getElementById('mailto');
const formContact = document.getElementById('form-contact') 
const submitInput = document.getElementById('send');

const aContactCorreo = document.querySelector('.contact-container__a');
const arrowLeft = document.querySelector('.form-contact__icon-close');
aContactCorreo.addEventListener('click', displayActive);
arrowLeft.addEventListener('click', displayInactive);

sobreMiPerfil.addEventListener('mousemove', scaleActive)
sobreMiPerfil.addEventListener('mouseout', scaleInactive)

formContact.addEventListener('submit', handleSubmit);


function scaleActive (){
    sobreMiPerfil.classList.add('scale-active');
    sobreMiPerfil.classList.remove('scale-inactive');
}

function scaleInactive() {
    sobreMiPerfil.classList.remove('scale-active');
    sobreMiPerfil.classList.add('scale-inactive');
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