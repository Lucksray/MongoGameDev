const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use((req,res,next) =>{
    const logEntry = `host: ${req.host},
    ip: ${req.ip},
    method: ${req.method},
    path: ${req.path},
    time: ${new Date()}`;
    console.log(logEntry);
    next();
})

app.use("/bank", require("./routes/bank.js"));
//app.use("/games", require("./routes/games.js"));
app.use("/info", require("./routes/info.js"));

app.use((err, req, res, next) =>{
    console.log("Error path");
    next(err);
})

const server = app.listen(1313,() => {
    console.log(`server started listening on port ${server.address().port}`);
})