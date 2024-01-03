const Card = require('../codex/Models/Card');

const index = async (req, res) => {
    const cards = await Card.find({}).select('image_uris');
    res.render('codex/index', {cards})
}

const search = async (req, res) => {
    const results = await Card.find({$text:{$search:`\"${req.query.name}\"`}})
    
    try {
        res.render(`codex/index`, {results});
    } catch(err) {
        res.render('codex', {results: null})
        console.error(err)
    }
}

const home = (req, res) => {
    res.render('/')
}

const show = async (req, res) => {
    const card = await Card.findById(req.params.id);
    res.render('codex/show', {title: card.name, card})
}

module.exports = {
    index,
    search,
    home,
    show,
}