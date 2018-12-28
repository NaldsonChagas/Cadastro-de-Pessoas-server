const express = require('express');
const NeDB = require('nedb');
const error = require('./../utils/error');

const db = new NeDB({
  filename: 'persons.db',
  autoload: true,
});

const router = express.Router();

router.get('/', (req, res) => {
  db.find({}).sort({ name: 1 }).exec((err, persons) => {
    if (err) error(res, 400, err);
    else res.status(200).json(persons);
  });
});

router.post('/', (req, res) => {
  db.insert(req.body, (err, person) => {
    if (err) error(res, 400, err);
    else res.status(200).json({ id: person._id });
  });
});

router.get('/:id', (req, res) => {
  db.findOne({ _id: req.params.id }, (err, person) => {
    if (err) error(res, 400, err);
    else res.status(200).json({ person: person });
  });
});

router.put('/:id', (req, res) => {
  db.update({ _id: req.params.id }, req.body, (err, numUpdate) => {
    if (err) error(res, 400, err);
    else res.status(200).json({ numUpdate: numUpdate });
  });
});

router.delete('/:id', (req, res) => {
  db.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
    if (err) error(res, 400, err);
    else res.status(200).json({ removedUsers: numRemoved });
  });
});

module.exports = router;