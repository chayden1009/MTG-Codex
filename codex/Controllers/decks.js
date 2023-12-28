const Card = require('../Models/Card');
const User = require('../Models/User');

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





module.exports = {
    create,
}
