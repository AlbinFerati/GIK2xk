const db = require('../models');
const validate = require('validate.js');
const constraints = {
  title: {
    length: {
      minimum: 2,
      maximum: 100,
      tooShort: '^Titeln must contain at least %{count} characters.',
      tooLong: '^Titeln must not exceed %{count} characters.',
    },
  },
};
const {
  createResponseError,
  createResponseMessage,
  createResponseSuccess,
} = require('../helpers/responseHelpers');

async function getById(id) {
  try {
    const allProds = await db.product.findOne({
      //Valideringar
      where: { id },
      include: [db.rating],
    });

    return createResponseSuccess(allProds);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allProds = await db.product.findAll({});
    return createResponseSuccess(allProds);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function addRating(id, rating) {
  if (!id) {
    return createResponseError(422, 'Id is mandatory');
  }
  try {
    rating.productId = id;
    const newRating = await db.rating.create(rating);

    return createResponseSuccess(newRating);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(product) {
  const invalidData = validate(product, constraints);
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newProd = await db.product.create(product);
    return createResponseSuccess(newProd);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(product, id) {
  const invalidData = validate(product, constraints);
  if (!id) {
    return createResponseError(422, 'Id is mandatory');
  }
  if (invalidData) {
    res.status(400).json(invalidData);
  }
  try {
    await db.product.update(product, {
      where: { id },
    });
    return createResponseMessage(200, `Product, ${id}, has been uppdated`);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, 'Id is mandatory');
  }
  try {
    await db.product.destroy({
      where: { id },
    });
    return createResponseMessage(200, `The product has been removed`);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

//http://localhost:5000/product/1/user/1/addToCart
async function addToCart(userId, productId, cartRow) {
  if (!userId) {
    return createResponseError(422, 'User-Id is mandatory');
  }
  try {
    cartRow.productId = productId;
    const cart = await db.cart.findOne({
      where: { userId },
    });
    cartRow.cartId = cart.id;
    console.log(cart.id);

    await db.cartRow.create(cartRow);
    const newCartWithProducts = await db.cart.findOne({
      where: { id: cart.id },
      include: [db.cartRow],
    });

    return createResponseSuccess(newCartWithProducts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// alternativa
// async function addToCart(id, product) {
//   try {
//     const existingProduct = await db.product.findOne({ where: { id } });

//     if (!existingProduct) {
//       return createResponseError(422, 'Invalid product id');
//     }

//     const cart = await db.cart.create();
//     await cart.addProduct(existingProduct, {
//       through: { amount: product.amount },
//     });

//     return createResponseSuccess(cart);
//   } catch (error) {
//     return createResponseError(error.status, error.message);
//   }
// }

module.exports = {
  getById,
  getAll,
  create,
  addRating,
  addToCart,
  update,
  destroy,
};
