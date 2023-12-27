require('dotenv').config();
require('./config/database');
const fs = require('fs');
const mongoose = require('mongoose');

const Card = require('./Models/Card');

const cards = JSON.parse(
    fs.readFileSync('./bulk.json', "utf-8")
)

const importData = async () => {
    try {
        await Card.create(cards);
        console.log("Data Imported");
        process.exit();
    } catch (err) {
        console.log(err);
    }
}

importData()
