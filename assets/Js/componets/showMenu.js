function showMenu() {
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.nav__menu');

  nav.addEventListener('click', function (e) {
    if (e.target.closest('.btn__menu')) {
      menu.classList.toggle('show__menu');
    }
  })
}

// exporta la función showMenu como un módulo
export default showMenu;
