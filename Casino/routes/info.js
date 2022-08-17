const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Casino").then(() => {
    console.log("info Connected");
}).catch(console.log);

const infoSchema = mongoose.Schema({
    pocketChange:Number,
    gamesPlayed:Number
})

const infoModel = new mongoose.model("info",infoSchema);

router.get("/info", (req, res) => {
    infoModel.find({}).then((info) => {
        res.send(JSON.stringify(info));
    }).catch((err) => {
        throw err;
    })
})

router.get("/info-pocket", (req, res) => {
    infoModel.find({}).then((info) => {
        res.send(JSON.stringify(info.pocketChange));
    }).catch((err) => {
        throw err;
    })
})

router.get("/info-played", (req, res) => {
    infoModel.find({}).then((info) => {
        res.send(JSON.stringify(info.gamesPlayed));
    }).catch((err) => {
        throw err;
    })
})



module.exports = router;