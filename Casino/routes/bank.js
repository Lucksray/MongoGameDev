const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Casino").then(() => {
    console.log("Bank Connected");
}).catch(console.log);

const withdrawSchema = mongoose.Schema({
    money:Number
})

const withdrawModel = new mongoose.model("withdraw", withdrawSchema);

router.get("/view", (req, res) => {
    withdrawModel.find({}).then((money) => {
        res.send(JSON.stringify(money));
    }).catch((err) => {
        throw err;
    })
})

router.put("/deposit", (req, res) => {
    //get the current value and add to it


    withdrawModel.findOne().then((value) => {
        value.money += req.body.money;
        value.save().then(change => {
            res.send(value);
        })
    })
})

router.post("/starter", (req, res) => {
    withdrawModel.create(req.body).then((start) => {
        res.send(start)
    }).catch((err) => {
        throw err;
    })
})

module.exports = router;