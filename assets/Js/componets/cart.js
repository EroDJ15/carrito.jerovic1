function cart (db, printProducts) {
  let cart = []
  const productsDOM = document.querySelector(".products__container");
  const notificationDOM = document.querySelector(".notification-button");
  const cartDOM = document.querySelector(".cart__body");
  const countDOM = document.querySelector(".cart__count--item");
  const totalDOM = document.querySelector(".cart__total--item");
  const checkoutDOM = document.querySelector(".btn--buy");


   function printCart () {
    let htmlCart = " ";
    if (cart.length === 0) {
      htmlCart = `<div class="cart__empty">
      <i class="bx bx-cart"></i>
      <p class="cart__empty__text">No hay productos en el carrito</p>
  </div>`;
      notificationDOM.classList.remove('show--notification')
    } else {
      for (const item of cart) {
        const product = db.find(p => p.id === item.id)
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
     notificationDOM.classList.remove('show__notification')
    } else {
      notificationDOM.classList.add('show__notification')
    }
    cartDOM.innerHTML = htmlCart
    notificationDOM.innerHTML = showItemsCount()
    countDOM.innerHTML = showItemsCount()
    totalDOM.innerHTML = showTotal()

  }

  function addToCart(id, qty = 1) {
    const itemFinded = cart.find(i => i.id == id)

    if (itemFinded) {
      itemFinded.qty += qty
    } else {
      cart.push({ id, qty });
    }
    addToCart()
    printCart()
  }


  function removeFromCart(id, qty = 1) {
    const itemFinded = cart.find(i => i.id === id)
    const result = itemFinded.qty - qty
    if (result > 0) {
      itemFinded.qty -= qty
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
    let suma = 0
    for (const item of cart) {
      suma += item.qty
    }
    return suma
  }

  function showTotal() {
    let total = 0
    for (const item of cart) {
      const productFinded = db.find(p => p.id === item.id)
      total += item.qty * productFinded.price
    }
    return total
  }

  function checkout() {
    for (const item of cart) {
      const productFinded = db.find(p => p.id === item.id)
      productFinded.quantity -= item.qty
    }
    cart = []
    printProducts()
    printCart ()
    window.alert('Gracias por su compra')
  }


  productsDOM.addEventListener('click', function (e) {
    if (e.target.closest('.add--to-cart')) {
      const id = e.target.closest('.add--to-cart').dataset.id
      addToCart(id)

    }
  })
  cartDOM.addEventListener('click', function (e) {
    if (e.target.closest('.add--to--cart')) {
      const id = +e.target.closest('.article__plus').dataset.id
      removeFromCart(id)
    }
    if (e.target.closest('.article__plus')) {
      const id = +e.target.closest('.article__plus').dataset.id
      addToCart(id)}

      if (e.target.closest('.remove-from-cart')) {
        const id = +e.target.closest('.remove__from__cart').dataset.id
        deleteFromCart(id)}
        

      })
      checkoutDOM.addEventListener('click', function (e) {
        checkout()
      })
  
  }
export default cart
