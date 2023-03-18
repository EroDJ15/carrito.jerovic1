function cart (db, printProducts) {
  let cart = [];

  function printCart() {
    console.log('carrito: ' , cart);
    console.log(cart);

    console.log ('item' + showItemsCount ())
  }

  function addToCart (id, qty =1) {
    const itemFinded =cart.find(i => i.id == id)

    if (itemFinded){
      console.log ('El producto con el id' + id + 'ya se encuentra en el carro')
      itemFinded.qty +=  qty
    } else{
      console.log ('El producto con el id' + id + 'no se encuentra en el carro')
      cart.push({ id,qty });
    }
    
    printCart()
  
  }

  addToCart(1)
  addToCart(2)

 function removeFromCart(id, qty = 1){
  const itemFinded =cart.find(i => i.id == id)
  const result = itemFinded.qty - qty
  if (result > 0) {
    console.log ('Quedan pocos productos con el id' + id)
    itemFinded.qty -= qty
  }else{
    console.log ('No quedan productos con el id' + id)
    cart = cart.filter(i => i.id !==id)
  }
  printCart(1)
 }
 removeFromCart (2)

 function deleteFromCart(id){
  cart = cart.filter(i => i.id !==id)
  console.log('se elimino completamente el producto selecionado' + id)

  function showItemsCount () {
    let suma = 0
    for (const item of cart){
      suma += item.qty

    }
    return suma
  }
 }
 function showtotal ()
}

export default cart;