let viewport = document.documentElement.clientWidth;

if (viewport <= 767) {
  const header = document.querySelector('.header');
  const headerNav = header.querySelector('.header__nav');
  const menuMobile = header.querySelector('.menu-mobile');
  const buttonOpened = headerNav.querySelector('.nav__button');
  const buttonCloced = menuMobile.querySelector('.menu-mobile__button');
  const menuMobileNav = menuMobile.querySelector('.menu-mobile__nav');

  header.classList.remove('header--position');
  menuMobileNav.classList.add('menu-mobile__nav--position');
  menuMobile.classList.remove('menu-mobile--visible');
  menuMobile.classList.add('menu-mobile--hidden');
  headerNav.classList.remove('nav--hidden');
  buttonCloced.style.display = 'block';

  [buttonOpened, buttonCloced].forEach((elem) => {
    elem.addEventListener('click', () => {
      menuMobile.classList.toggle('menu-mobile--hidden');
      headerNav.classList.toggle('nav--hidden');
    });
  });
}
