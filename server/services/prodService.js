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

async function getAll() {
  try {
    const allProds = await db.product.findAll();
    //Valideringar
    return createResponseSuccess(allProds);
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

function destroy() {}

module.exports = {
  getAll,
  create,
  update,
  destroy,
};
