const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongoose://localhost:27017/Test').then(() => {
    console.log("Hero connected");
}).catch(console.log);

const heroSchema = mongoose.Schema({
    playerName:String,
    playerLevel:Number,
    playerExp:Number,
    playerHealth:Number,
    playerDefence:Number
})

const heroModel = new mongoose.model('Heroes', heroSchema);

module.exports = {heroModel}