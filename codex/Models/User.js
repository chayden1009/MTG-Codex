const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Card = require('./Card');

const deckSchema = new Schema({
    name: {
        type: String,
    },
    cards: [{
      type: Schema.Types.ObjectId,
      ref: 'Cards',
      quantity: {
        type: Number,
        required: true,
      }
    }],
})

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true,
    },
    email: String,
    avatar: String,
    decks: [deckSchema],
}, {
    timestamps: true

});

module.exports = mongoose.model('User', userSchema);