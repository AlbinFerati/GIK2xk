const router = require('express').Router();
const prodService = require('../services/prodService');
const db = require('../models');

router.get('/:id', (req, res) => {
  const id = req.params.id;

  prodService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get('/', (req, res) => {
  db.cart.findAll().then((result) => {
    res.send(result);
  });
});

router.post('/', (req, res) => {
  db.cart.create(req.body).then((result) => {
    res.send(result);
  });
});
router.put('/', (req, res) => {
  db.cart
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      res.send(result);
    });
});

router.delete('/', (req, res) => {
  db.cart
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json(`Produkten med id ${result} raderades`);
    });
});

module.exports = router;
