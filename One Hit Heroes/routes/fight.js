const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Test').then(() => {
    console.log('Fight Connected');
}).catch(console.log);

const monsterSchema = mongoose.Schema({
    name:String,
    attack:Number,
    difficulty:String,
    exp:Number
})

const bossSchema = mongoose.Schema({
    name:String,
    attack:Number,
    health:Number,
    exp:Number
})

const bossModel = new mongoose.model('Bosses', bossSchema);
const monsterModel = new mongoose.model('monsters', monsterSchema);

module.exports = {monsterModel}