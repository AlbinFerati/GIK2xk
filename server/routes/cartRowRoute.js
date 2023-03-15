const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.cart_row.findAll().then((result) => {
    res.send(result);
  });
});

router.post('/', (req, res) => {
  db.cart_row.create(req.body).then((result) => {
    res.send(result);
  });
});

router.put('/', (req, res) => {
  db.cart_row
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      res.send(result);
    });
});

router.delete('/', (req, res) => {
  db.cart_row
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json(`Produkten med id ${result} raderades`);
    });
});

module.exports = router;
