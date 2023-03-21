const router = require('express').Router();
const prodService = require('../services/prodService');

// SÖK EFTER http://localhost:5000/prods/1 FÖR ATT FÅ FRAM RATING

router.post('/:id/addRating', (req, res) => {
  const rating = req.body;
  const id = req.params.id;

  prodService.addRating(id, rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post('/:id/user/:userId/addToCart', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.id;
  const cartRow = req.body;

  prodService.addToCart(userId, productId, cartRow).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  prodService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get('/', (req, res) => {
  prodService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post('/', (req, res) => {
  const product = req.body;
  prodService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put('/', (req, res) => {
  const product = req.body;
  const id = product.id;
  prodService.update(product, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete('/', (req, res) => {
  const id = req.body;
  prodService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
