function cart(db, printProducts) {
  let cart = [];

  function printCart() {
    console.log('carrito: ');
    console.log(cart);

    console.log('items:' + showItemsCount())
    console.log('total:' + showTotal())
  }

  function addToCart(id, qty = 1) {
    const itemFound = cart.find(i => i.id == id)

    if (itemFound) {
      console.log('El producto con el id' + id + 'ya se encuentra en el carro')
      itemFound.qty += qty
    } else {
      console.log('El producto con el id' + id + 'no se encuentra en el carro')
      cart.push({ id, qty });
    }

    printCart()
  }

  addToCart(1)
  addToCart(2)

  function removeFromCart(id, qty = 1) {
    const itemFound = cart.find(i => i.id == id)
    const result = itemFound.qty - qty
    if (result > 0) {
      console.log('Quedan pocos productos con el id' + id)
      itemFound.qty -= qty
    } else {
      console.log('No quedan productos con el id' + id)
      cart = cart.filter(i => i.id !== id)
    }
    printCart()
  }

  removeFromCart(2)

  function deleteFromCart(id) {
    cart = cart.filter(i => i.id !== id)
    console.log('se elimino completamente el producto selecionado' + id)

    printCart()
  }

  deleteFromCart()

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

  checkout()
}

export default cart
