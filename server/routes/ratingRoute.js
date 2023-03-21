const router = require('express').Router();
const db = require('../models');

router.get('/:id/product', (req, res) => {});

router.get('/', (req, res) => {
  db.rating.findAll().then((result) => {
    res.send(result);
  });
});

router.post('/', (req, res) => {
  db.rating.create(req.body).then((result) => {
    res.send(result);
  });
});

router.put('/', (req, res) => {
  db.rating
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      res.send(result);
    });
});

router.delete('/', (req, res) => {
  db.rating
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json(`Produkten med id ${result} raderades`);
    });
});

module.exports = router;
