const express = require('express');
const router = express.Router();
const decksCtrl = require('../Controllers/decks');

router.get('/new', (req, res) => {
    res.render('decks/new')
});

router.get('/:id', decksCtrl.view);

router.get('/:id/add', decksCtrl.add);

router.post('/', decksCtrl.create);


module.exports = router;