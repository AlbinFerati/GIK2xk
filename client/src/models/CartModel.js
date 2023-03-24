import api from '../api.js';

export async function getCartById(id = 1) {
  try {
    const result = await api.get(`/carts/${id}`);

    if (result.status === 200) return result.data;

    return {};
  } catch (err) {
    return null;
  }
}

export async function addToCart(cartId, productId, quanitity) {
  const cart = await getCartById(cartId);
  let id = cartId;

  if (!cart) {
    const result = await api.post(`carts/create`);
    id = result.data.id;
  }

  const result = await api.post(`carts/${cartId}/addProduct/${productId}`, {
    amount: quanitity,
  });
  if (result.status === 200) return result.data;
  console.log(result.status);
  console.log(result.data);

  return {};
}

export async function removeFromCart(cartId = 1, productId, quanitity) {
  const result = await api.delete(
    `carts/${cartId}/removeProduct/${productId}`,
    {
      data: {
        amount: quanitity,
      },
    }
  );
  if (result.status === 200) return result.data;
  console.log(result.status);
  console.log(result.data);

  return {};
}
