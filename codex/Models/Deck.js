const mongoose = require('mongoose');   
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    name: {
        type: String,
    },
    cards: [],
})