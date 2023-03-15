const router = require('express').Router();
const { validate } = require('validate.js');
const db = require('../models');
const prodService = require('../services/prodService');

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
  db.product
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json(`Produkten med id ${result} raderades`);
    });
});

module.exports = router;
