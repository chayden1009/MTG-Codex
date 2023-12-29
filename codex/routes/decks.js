const express = require('express');
const router = express.Router();
const decksCtrl = require('../Controllers/decks');

router.get('/new', (req, res) => {
    res.render('decks/new')
});

router.get('/:id/view', decksCtrl.view);

router.post('/', decksCtrl.create);


module.exports = router;