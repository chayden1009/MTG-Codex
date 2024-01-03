const express = require('express');
const router = express.Router();
const cardsCtrl = require('../Controllers/cards');
const passport = require('passport');

router.get('/', (req, res) => {
    res.render('index', {title: "MTG Codex"});
})

router.get('/auth/google', passport.authenticate(
    //passport strategy
    'google',
    {
        scope: ['profile', 'email'],
        prompt: 'select_account',
    },
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/',
        failureRedirect: '/',
    }
));

router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
})


module.exports = router;