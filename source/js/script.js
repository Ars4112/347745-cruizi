let viewport = document.documentElement.clientWidth;
const header = document.querySelector('.header');
const headerNav = header.querySelector('.header__nav');
const menuMobile = header.querySelector('.menu-mobile');
const buttonOpened = headerNav.querySelector('.nav__button');
const buttonCloced = menuMobile.querySelector('.menu-mobile__button');
const menuMobileNav = menuMobile.querySelector('.menu-mobile__nav');
const form = document.querySelector('form');

if (viewport <= 768) {
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

const addMask = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let eventCalllback = function (e) {
      let el = e.target;
      let clearVal = el.dataset.phoneClear;
      let pattern = el.dataset.phonePattern;
      let matrixDef = '+7(___) ___-__-__';
      let matrix = pattern ? pattern : matrixDef;
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = e.target.value.replace(/\D/g, '');
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          return;
        }
      }
      if (def.length >= val.length) {
        val = def;
      }
      e.target.value = matrix.replace(/./g, function (a) {
        if (/[_\d]/.test(a) && i < val.length) {
          return val.charAt(i++);
        } else if (i >= val.length) {
          return '';
        } else {
          return a;
        }
      });
    };
    let phoneInputs = form.querySelectorAll('input[name="tel"]');
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
};

const addValid = () => {
  const input = form.querySelectorAll('form input');
  const checkbox = form.querySelector('form input[name="agreement"]');
  const regExpEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const regExpName = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
  let isValidate;

  const validateElement = (element) => {
    if (element.name === 'name') {
      if (!regExpName.test(element.value)) {
        element.nextElementSibling.textContent = 'Не валидное имя';
        isValidate = false;
      } else {
        element.nextElementSibling.textContent = '';
        isValidate = false;
      }
    }
    if (element.name === 'email') {
      if (!regExpEmail.test(element.value)) {
        element.nextElementSibling.textContent = 'Не валидный email';
        isValidate = false;
      } else {
        element.nextElementSibling.textContent = '';
        isValidate = true;
      }
    }
    if (element.name === 'tel') {
      if (element.value.replaceAll(/\D/g, '').length < 11) {
        element.nextElementSibling.textContent = 'Введите полный номер';
        isValidate = false;
      } else {
        element.nextElementSibling.textContent = '';
        isValidate = true;
      }
    }
    if (element.name === 'agreement') {
      if (element.checked) {
        form.querySelector('.form__error-checkbox').textContent = '';
        isValidate = true;
      } else {
        form.querySelector('.form__error-checkbox').textContent =
            'Согласитесь с условиями';
        isValidate = false;
      }
    }
  };

  input.forEach((element) => {
    ['input', 'blur', 'focus'].forEach((elem)=> {
      element.addEventListener(elem, () => {
        validateElement(element);
      });
    });
  });

  form.addEventListener('submit', (evt) => {
    input.forEach((element) => {
      if (element.value === '') {
        element.nextElementSibling.textContent = 'Заполните поле';
        isValidate = false;
      } else {
        element.nextElementSibling.textContent = '';
      }
      if (element.name === 'tel') {
        if (element.value === '') {
          element.nextElementSibling.textContent =
            'Введите номер телефона';
          isValidate = false;
        } else {
          element.nextElementSibling.textContent = '';
        }
      }
    });
    if (!checkbox.checked) {

      evt.preventDefault();
    }
    if (isValidate) {
      form.reset();
      form.querySelector('.form__message').textContent =
            'Форма отправлена успешно';
    } else {
      evt.preventDefault();
    }
  });
};
const addScroll = ()=> {
  const button = document.querySelectorAll('nav a');
  const idList = document.querySelectorAll('#benefits, #travaling, #catalog, #contacts');

  button.forEach((element)=> {
    element.addEventListener('click', (evt)=> {
      evt.preventDefault();
      if (element.hash === '#benefits') {
        if (viewport <= 768) {
          menuMobile.classList.add('menu-mobile--hidden');
          headerNav.classList.remove('nav--hidden');
        }
        idList[1].scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
      if (element.hash === '#travaling') {
        if (viewport <= 768) {
          menuMobile.classList.add('menu-mobile--hidden');
          headerNav.classList.remove('nav--hidden');
        }
        idList[0].scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
      if (element.hash === '#catalog') {
        if (viewport <= 768) {
          menuMobile.classList.add('menu-mobile--hidden');
          headerNav.classList.remove('nav--hidden');
        }
        idList[2].scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
      if (element.hash === '#contacts') {
        if (viewport <= 768) {
          menuMobile.classList.add('menu-mobile--hidden');
          headerNav.classList.remove('nav--hidden');
        }
        idList[3].scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    });
  });
};

addScroll();
addValid();
addMask();
