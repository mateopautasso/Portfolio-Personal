const allProject = document.querySelector(".all-project");
const logoPrincipal = document.querySelector('.header-section__img');
const sobreMi = document.querySelector(".header-section__sobre-mi-a");

sobreMi.addEventListener('mousemove', scaleActive)
sobreMi.addEventListener('mouseout', scaleInactive)
logoPrincipal.addEventListener('mousemove', rotateActive)
logoPrincipal.addEventListener('mouseout', rotateInactive)

function rotateActive() {
    logoPrincipal.classList.add('rotate-active')
}function rotateInactive() {
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


let projects = []

function crearNuevaCardProject(src,titulo,descripcion,href) {

    let newProject = {
        src: src,
        titulo: titulo,
        descripcion: descripcion,
        href: href
    }

    projects.push(newProject);
    let cardProject = `
    <article class="all-project__card">
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
    "yelpCamp.png",
    "YelpCamp | Codewell Challenge",
    "Codewell Challenge realizado como práctica. Responsive Design con breakpoints aplicados en diferentes hojas de estilo. Aplicación de metodología BEM.",
    "https://mateopautasso.github.io/YelpCamp-web/"
)
crearNuevaCardProject
(
    "jnSpecter.png",
    "Specter | Codewell Challenge",
    "Codewell Challenge realizado como práctica. Responsive Design con breakpoints aplicados en una sola hoja de estilos mediante media queries.",
    "https://mateopautasso.github.io/JohnathanSpecter-web/"
)
crearNuevaCardProject
(
    "bataBit.png",
    "BataBit Page",
    "Landing page (solo vista mobile/small-tablet) realizada como práctica de curso. Breakpoints aplicados en diferentes hojas de estilo, a su vez algunos media queries en la hoja de estilos principales. Aplicación de metodología BEM.",
    "https://mateopautasso.github.io/Batabit-design-mobile-tablet/"
)
crearNuevaCardProject
(
    "yardSale.png",
    "Yard Sale e-commerce",
    "Landing page de e-commerce realizado como práctica de curso. Contiene solo la sección de inicio junto con algunas otras cards desplegables con JavaScript",
    "https://mateopautasso.github.io/Yard-Sale__e-commerce/"
)