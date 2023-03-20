function showMenu() {
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.nav__menu');

  nav.addEventListener('click', function (e) {
    if (e.target.closest('.btn__menu')) {
      menu.classList.toggle('show--menu');
    }

    if (e.target.closest('.btn__close') || e.target.closest('.nav__link')) {
      menu.classList.remove('show--menu');
    }
  })
}

// llama a la función showMenu para que se ejecute
showMenu();

export default showMenu;
