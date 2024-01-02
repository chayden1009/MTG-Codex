const Card = require('../Models/Card');
const User = require('../Models/User');
const mongoose = require('mongoose');

const getUser = async (req, res) => {
    const user = await User.findById(req.user.id);
    return user;
}



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
    let results;
    
    let deck = await user.decks.find(d => d._id.equals(mongoose.Types.ObjectId.createFromHexString(req.params.id)))

    results = await Card.find({$text:{$search:`\"${req.query.searchValue}\"`}});
    
    res.render('decks/edit', {deck, results})
}

const addCard = async (req, res) => {
    const user = await User.findById(req.user.id);
    const deck = user.decks.find(d => d._id.equals(mongoose.Types.ObjectId.createFromHexString(req.params.id)));
    res.render('decks/:id/add', {title: deck.name, deck})
}

const deleteDeck = async (req, res) => {
    const user = getUser(req, res);
    const deckIdx = user.decks.findIndex(d => d._id.equals(mongoose.Types.ObjectId.createFromHexString(req.params.id)))
    user.decks.remove(deckIdx);

    res.render('/', {title: 'MTG Codex'});
}




module.exports = {
    create,
    view,
    add: addCard,
    edit,
    deleteDeck,

}
