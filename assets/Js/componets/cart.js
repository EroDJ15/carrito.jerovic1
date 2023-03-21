const cart = (db, drawProducts) => {
  let cart = [];
  const productsDOM = document.querySelector(".products__container");
  const notifyDOM = document.querySelector(".notify");
  const cartDOM = document.querySelector(".cart__body");
  const countDOM = document.querySelector(".cart__count__item");
  const totalDOM = document.querySelector(".cart__total__item");
  const checkoutDOM = document.querySelector(".btn__buy");


  const printCart = () => {
    let htmlCart = "";
    if (cart.length === 0) {
      htmlCart = `<div class="cart__empty">
      <i class="bx bx-cart"></i>
      <p class="cart__empty__text">No hay productos en el carrito</p>
  </div>`;
      notifyDOM.classList.remove('show__notification')
    } else {
      for (const item of cart) {
        const product = db.find(p => p.id === id)
        htmlCart += `
        <article class="article">
        <div class="article__image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="article__content">
            <h3 class="article__title">${product.name}</h3>
            <span class="article__price">${product.price}</span>
            <div class="article__quantity">
                <button type="button" data-id="${item.id}" class="article__quiantity__btn article__minus">
                    <i class="bx bx-minus"></i>
                </button>
                <span class="article__quantity__text">${item.qty}</span>
                <button type="button" data-id="${item.id}" class="article__quiantity__btn article__plus">
                    <i class="bx bx-plus"></i>
                </button>
            </div>
            <button type="button" data-id="${item.id}" class="article__btn remove__from__cart">
                <i class="bx bx-trash"></i>
            </button>
        </div>
    </article>    
    `;
      }
    }

    if (cart.length === 0) {
      notifyDOM.classList.remove('show--notify')
    } else {
      notifyDOM.classList.add('show--notify')
    }
    cartDOM.innerHTML = htmlCart
    notifyDOM.innerHTML = showItemsCount()
    counttotalDOM.innerHTML = showItemsCount()
    totalDOM.innerHTML = showTotal()

  }

  function addToCart(id, qty = 1) {
    const itemFound = cart.find(i => i.id == id)

    if (itemFound) {
      itemFound.qty += qty
    } else {
      cart.push({ id, qty });
    }

    printCart()
  }


  function removeFromCart(id, qty = 1) {
    const itemFound = cart.find(i => i.id == id)
    const result = itemFound.qty - qty
    if (result > 0) {
      itemFound.qty -= qty
    } else {
      cart = cart.filter(i => i.id !== id)
    }
    printCart()
  }


  function deleteFromCart(id) {
    cart = cart.filter(i => i.id !== id)

    printCart()
  }

  function showItemsCount() {
    let sum = 0
    for (const item of cart) {
      sum += item.qty
    }
    return sum
  }

  function showTotal() {
    let total = 0
    for (const item of cart) {
      const productFound = db.find(p => p.id === item.id)
      total += item.qty * productFound.price
    }
    return total
  }

  function checkout() {
    for (const item of cart) {
      const productFound = db.find(p => p.id === item.id)
      productFound.quantity -= item.qty
    }
    cart = []
    console.log('Gracias por su compra')
  }

  printCart ()
  productsDOM.addEventListener('click', function (e) {
    if (e.target.closest('.add--to-cart')) {
      const id = e.target.closest('.add--to-cart').dataset.id
      addToCart(id)

    }
  })
  cartDOM.addEventListener('click', function (e) {
    if (e.target.closest('.article-minus')) {
      const id = +e.target.closest('.add--to-cart').dataset.id
      removeFromCart(id)
    }
    if (e.target.closest('.add--to-cart')) {
      const id = +e.target.closest('.add--to-cart').dataset.id
      addToCart(id)}

      if (e.target.closest('.remove-from-cart')) {
        const id = +e.target.closest('.add--to-cart').dataset.id
        deleteFromCart(id)}
        

      })
      checkoutDOM.addEventListener('click', function(){
        checkout()
      })
  
  }
export default cart
