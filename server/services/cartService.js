const db = require('../models');
const validate = require('validate.js');
const {
  createResponseError,
  createResponseMessage,
  createResponseSuccess,
} = require('../helpers/responseHelpers');

async function getById(id) {
  if (!id) {
    return createResponseError(422, `cart id not defined`);
  }

  try {
    const cart = await db.cart.findOne({
      where: { id },
      include: [db.product],
    });

    if (!cart) {
      return createResponseError(404, 'Cart not found');
    }

    const cartObj = {
      id: cart.id,
      priceTotal: cart.priceTotal,
      createdAt: cart.createdAt,
      products: [],
    };

    if (cart.products) {
      cart.products.forEach((product) => {
        const cartProduct = product.cartProduct;
        cartObj.products.push({
          id: product.id,
          name: product.name,
          description: product.description,
          imageUrl: product.imageUrl,
          price: product.price,
          amount: cartProduct ? cartProduct.amount : 0,
        });
      });
    }

    return createResponseSuccess(cartObj);
  } catch (error) {
    console.log(error);
    return createResponseError(error.status, error.message);
  }
}

async function addProduct(cartId, productId, quantity) {
  if (!cartId || !productId || !quantity) {
    return createResponseError(422, 'Request incomplete');
  }

  try {
    const theCart = await db.cart.findOne({ where: { id: cartId } });
    const theProduct = await db.product.findOne({ where: { id: productId } });

    if (!theCart) {
      return createResponseError(422, 'Invalid cart id');
    }

    if (!theProduct) {
      return createResponseError(422, 'Invalid product id');
    }

    const [theCartProduct, created] = await db.cartProduct.findOrCreate({
      where: { cartId, productId },
      defaults: { amount: 0 },
    });

    theCartProduct.amount += quantity;
    theCart.priceTotal += theProduct.price * quantity;

    await theCartProduct.save();
    await theCart.save();

    return createResponseSuccess(theCartProduct);
  } catch (error) {
    console.error(error);
    return createResponseError(error.status, error.message);
  }
}

async function deleteProduct(cartId, productId, amount) {
  if (!cartId || !productId || !amount) {
    return createResponseError(422, 'Incomplete request');
  }

  try {
    const theCart = await db.cart.findOne({
      where: { id: cartId },
      include: [db.product],
    });

    const theProduct = await db.product.findOne({
      where: { id: productId },
    });

    if (!theCart) {
      return createResponseError(422, 'Invalid cart ID');
    }

    let theCartProduct = await db.cartProduct.findOne({
      where: { cartId, productId },
    });

    if (!theCartProduct) {
      return createResponseError(422, 'Item is not in the cart');
    }

    if (theCartProduct.amount <= +amount) {
      theCart.priceTotal -= theCartProduct.amount * theProduct.price;
      await theCartProduct.destroy();
    } else {
      theCartProduct.amount -= +amount;
      theCart.priceTotal -= amount * theProduct.price;
      await theCartProduct.save();
    }

    await theCart.save();
    return createResponseSuccess(theCartProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create() {
  try {
    const createCart = await db.cart.create();

    return createResponseSuccess(createCart);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(id, cart) {
  if (!id) {
    return createResponseError(422, 'cart id not defined');
  }

  try {
    const theCart = await db.cart.findOne({ where: { id } });
    if (!theCart) {
      return createResponseError(404, `cart with id ${id} not found`);
    }
    await db.cart.update(cart, { where: { id } });

    return createResponseMessage(200, `cart with id ${id} has been updated`);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, 'Id not defined');
  }
  try {
    await db.cart.destroy({ where: { id } });
    return createResponseMessage(200, `cart with id ${id} has been deleted`);
  } catch {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  getById,
  create,
  update,
  destroy,
  addProduct,
  deleteProduct,
};
