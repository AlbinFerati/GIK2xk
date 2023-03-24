import { useEffect, useState } from 'react';
import { addToCart, getCartById, removeFromCart } from '../models/CartModel';
import CartListItem from '../components/CartListItem';

function Cart() {
  const [cart, setCart] = useState({});
  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    const cart = await getCartById(1);
    setCart(cart);
  }

  function editItemInCart(cartId, productId, quantity) {
    if (quantity < 0) {
      removeFromCart(cartId, productId, -quantity).then((result) => {
        getCart();
      });
    } else {
      addToCart(cartId, productId, quantity).then((result) => {
        getCart();
      });
    }
  }

  console.log(cart);
  return (
    <>
      {cart?.products &&
        cart.products.map((product) => {
          return (
            <li key={`cartDrawerItemId_${product.id}`}>
              <CartListItem onEdit={editItemInCart} product={product} />
            </li>
          );
        })}
      {cart?.products && <p>Total: {cart.priceTotal}</p>}
    </>
  );
}

export default Cart;
