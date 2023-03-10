const allProject = document.querySelector(".all-project");
const sobreMiProject = document.querySelector(".header-section__sobre-mi-a");

sobreMiProject.addEventListener('mousemove', scaleActive)
sobreMiProject.addEventListener('mouseout', scaleInactive)

function scaleActive (){
    sobreMiProject.classList.add('scale-active');
    sobreMiProject.classList.remove('scale-inactive');
}
function scaleInactive() {
    sobreMiProject.classList.remove('scale-active');
    sobreMiProject.classList.add('scale-inactive');
}

function crearNuevaCardProject(src,titulo,descripcion,href,transitionDuration) {
    let cardProject = `
    <article class="all-project__card" data-aos="zoom-in-up" data-aos-duration="${transitionDuration}">
        <figure class="all-project__figure">
            <img class="card__img" src="./assets/images/${src}" alt="Imágen de proyecto" title="Imágen del proyecto en cuestión">
        </figure>
        <h3 class="card__h3" title="${titulo}">${titulo}</h3>
        <p class="card__p">${descripcion}</p>
        <a target="_blank" href="${href}" class="card__btn" title="visitar proyecto">Visitar</a>
    </article>
    `
    allProject.innerHTML += cardProject;
}

crearNuevaCardProject
(
    "calculadora.png",
    "Calculadora",
    "Calculadora con funciones básicas desarrollada a traves de HTML, CSS y JavaScript",
    "https://mateopautasso.github.io/Calculadora/",
    "1000"
)
crearNuevaCardProject
(
    "jnSpecter.png",
    "Specter | Codewell Challenge",
    "Codewell Challenge realizado como práctica. Responsive Design con breakpoints aplicados en una sola hoja de estilos mediante media queries.",
    "https://mateopautasso.github.io/JohnathanSpecter-web/",
    "1500"
)
crearNuevaCardProject
(
    "yelpCamp.png",
    "YelpCamp | Codewell Challenge",
    "Codewell Challenge realizado como práctica. Responsive Design con breakpoints aplicados en diferentes hojas de estilo. Aplicación de metodología BEM.",
    "https://mateopautasso.github.io/YelpCamp-web/",
    "2000"
)
crearNuevaCardProject
(
    "bataBit.png",
    "BataBit Page",
    "Landing page (solo vista mobile/small-tablet) realizada como práctica de curso. Breakpoints aplicados en diferentes hojas de estilo, a su vez algunos media queries en la hoja de estilos principales. Aplicación de metodología BEM.",
    "https://mateopautasso.github.io/Batabit-design-mobile-tablet/",
    "1000"
)
crearNuevaCardProject
(
    "yardSale.png",
    "Yard Sale e-commerce",
    "Página de E-commerce realizada como práctica de curso. Contiene solo la sección de inicio junto con algunas otras cards desplegables con JavaScript",
    "https://mateopautasso.github.io/Yard-Sale__e-commerce/",
    "1500"
)