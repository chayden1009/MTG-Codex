const express = require('express');
const router = express.Router();
const cardsCtrl = require('../Controllers/cards');

router.get('/search', cardsCtrl.search);

router.get('/:id', cardsCtrl.show);

module.exports = router;