const Card = require('../Models/Card');
const User = require('../Models/User');
const mongoose = require('mongoose');




const create = async (req, res) => {
    const user = await User.findById(req.user.id)

    if (!user.decks) {
        user.decks = [];
    }
    user.decks.push(req.body);
    try {
        await user.save();
    } catch (err) {
        console.error(err);
    }
    res.redirect('/');
}

const view = async (req, res) => {
    const user = await User.findById(req.user.id);
    const deck = user.decks.find((deck, idx) => deck._id.equals(mongoose.Types.ObjectId.createFromHexString(req.params.id)));

    await user.populate(`decks.${user.decks.indexOf(deck)}.cards`);
    
    res.render('decks/view', {title: deck.name, deck});
}

const edit = async (req, res) => {
    const user = await User.findById(req.user.id);
    let deck = await user.decks.find(d => d.id === `${req.params.id}`);
    await user.populate(`decks.${user.decks.indexOf(deck)}.cards`);
    
    let results;

    results = await Card.find({$text:{$search:`\"${req.query.searchValue}\"`}});
    
    res.render('decks/edit', {deck, results})
}

const addCard = async (req, res) => {
    const user = await User.findById(req.user.id);
    const deck = user.decks.find(d => d.id === `${req.params.id}`);

    const quantity = req.body.quantity;

    if (!deck.cards) {
        deck.cards = []
    }
    for (let i = 0; i < quantity; i++) {
        await deck.cards.push(`${req.body.cardId}`);
        try {
            await user.save();
        } catch(err) {
            console.error(err);
        }
    }
    
    res.redirect(`${req.params.id}/edit`);
}

const deleteDeck = async (req, res) => {
    const user = await User.findById(req.user.id)
    const deck = user.decks.find(d => d._id.equals(mongoose.Types.ObjectId.createFromHexString(req.params.id)));
    const deckIdx = user.decks.indexOf(deck);

    user.decks.splice(deckIdx, 1);

    try {
        await user.save();
    } catch(err) {
        console.error(err);
    }
    res.redirect('/');
}




module.exports = {
    create,
    view,
    add: addCard,
    edit,
    deleteDeck,

}
