import loader from './componets/loader.js'
import showMenu from './componets/showMenu.js'
import showCart from './componets/showCart.js'
import products from './componets/products.js'
import getProducts from './componets/Helpers/getProducts.js'
import cart from './componets/cart.js'
/*ui elments*/
/*ocultar loader*/
loader()

/*mostrar menu*/
showMenu()

/*mostrar carrito*/
showCart()

/* end ui elments*/

/*products*/
const {db, p} = products (await getProducts())


/*carrito*/
/*cart*/
cart(db, products.printProduct)
