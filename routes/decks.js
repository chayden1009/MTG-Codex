const express = require('express');
const router = express.Router();
const decksCtrl = require('../../Controllers/decks');

router.get('/new', (req, res) => {
    res.render('decks/new')
});

router.get('/:id/edit', decksCtrl.edit);

router.get('/:id', decksCtrl.view);

router.delete('/:id', decksCtrl.deleteDeck)

router.post('/:id', decksCtrl.add);

router.post('/', decksCtrl.create);


module.exports = router;