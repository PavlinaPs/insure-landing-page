const navigation = document.getElementById('nav');
const navLinks = Array.from(document.querySelectorAll('.header__nav__item'));
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close');

function toggleOpen() {
    navigation.classList.toggle('open');
}

hamburgerIcon.addEventListener('click', toggleOpen);
closeIcon.addEventListener('click', toggleOpen);
navLinks.forEach(navLink => navLink.addEventListener('click', toggleOpen));

