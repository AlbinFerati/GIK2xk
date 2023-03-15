const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.product.findAll().then((result) => {
    res.send(result);
  });
});

router.post('/', (req, res) => {
  db.product.create(req.body).then((result) => {
    res.send(result);
  });
});

router.put('/', (req, res) => {
  db.product
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      res.send(result);
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
