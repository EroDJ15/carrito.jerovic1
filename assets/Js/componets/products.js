function product(products) {
  function printProducts() {
    const productsDom = document.querySelector('.products__container');
    const htmlProducts = products.map(product => `
      <article class="product">
        <div class="product__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product__content">
          <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
            <i class='bx bxs-cart-add'></i>
          </button>
          <span class="product__price">$${product.price}</span>
          <span class="product__stock">Disponibles: ${product.quantity}</span>
          <h3 class="product__title">${product.name}</h3>
        </div>
      </article>
    `).join('');

    productsDom.innerHTML = htmlProducts;
  }

  printProducts();

  return {
    db: products,
    printProducts
  };
}

export default product;
