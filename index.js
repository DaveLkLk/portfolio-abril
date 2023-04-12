const menuNav = document.querySelector('.nav__menu');
const sectionContainer = document.querySelector('.container__section1');

menuNav.addEventListener('click', showMenu)
function showMenu(){
    sectionContainer.classList.toggle('section1--active')
}
