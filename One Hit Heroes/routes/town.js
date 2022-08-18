const router = require('mongoose').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Test').then(() => {
    console.log('Town connected');
}).catch(console.log);

const healingSchema = mongoose.Schema({
    name:String,
    strength:Number,
    price:Number
})

const defenceSchema = mongoose.Schema({
    name:String,
    strength:Number,
    price:Number
})

const defenceModel = new mongoose.model('defence', defenceSchema);
const healingModel = new mongoose.model('healing', healingSchema);

const shopSchema = mongoose.Schema({

    potions:[healingSchema],
    amulets:[defenceSchema]
})

const shopModel = new mongoose.model("shop", shopSchema);

module.exports = {shopModel};