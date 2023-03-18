function showMenu (){
  const btnCart = document.querySelector('.btn--cart')
  const cart = document.querySelector('.nav__menu')

  cart.addEventListener('click', function(e) {
    cart.classList.toggle('show--cart')

    if (e.target.closest('.btn--menu')){
      cart.classList.remove ('show--menu')

    }

  })
}


export default showMenu
