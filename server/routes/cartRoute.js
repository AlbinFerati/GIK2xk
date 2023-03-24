const router = require('express').Router();
const cartService = require('../services/cartService');
const db = require('../models');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  cartService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post('/:cartId/addProduct/:productId', (req, res) => {
  const quantity = req.body.amount;
  const productId = req.params.productId;
  const cartId = req.params.cartId;
  cartService.addProduct(cartId, productId, quantity).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete('/:cartId/removeProduct/:productId', (req, res) => {
  const quantity = req.body.amount;
  const prodId = req.params.productId;
  const cartId = req.params.cartId;
  cartService.deleteProduct(cartId, prodId, quantity).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post('/create', (req, res) => {
  cartService.create().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put('/', (req, res) => {
  const post = req.body;
  const id = post.id;
  cartService.update(id, post).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete('/', (req, res) => {
  const id = req.body.id;
  cartService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
