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

module.exports = {
  getById,
  getAll,
  create,
  addRating,
  update,
  destroy,
};
