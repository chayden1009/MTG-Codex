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
    const decks = user.decks;
    const deck = decks.find(d => d._id.equals(mongoose.Types.ObjectId.createFromHexString(req.params.id)));
    
    res.render('decks/view', {title: deck.name, deck});
}

const edit = async (req, res) => {
    const user = await User.findById(req.user.id);
    let deck = await user.decks.find(d => d.id === `${req.params.id}`);
    let results;

    results = await Card.find({$text:{$search:`\"${req.query.searchValue}\"`}});
    
    res.render('decks/edit', {deck, results})
}

const addCard = async (req, res) => {
    const user = await User.findById(req.user.id);
    const deck = user.decks.find(d => d.id === `${req.params.id}`);
    
    let quantity = req.query.quantity;
    let cardReq = req.body.cardId;

    console.log(req.body.cardId);
    if (!deck.cards) {
        deck.cards = []
    }

    await deck.cards.push(cardReq);

    try {
        await user.save();
        res.redirect(`${req.params.id}/edit`);
    } catch (err) {
        console.error(err);
    }
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
