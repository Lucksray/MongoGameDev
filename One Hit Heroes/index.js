const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//setup
const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
    const logEntry = `host: ${req.host},
    ip: ${req.ip},
    path = ${req.path}`;
    console.log(logEntry);
    next();
})

app.use("/fight", require("./routes/fight.js"));
app.use("/town", require("./routes.town.js"));

app.use((err, req, res, next) => {
    console.log("error path");
    next(err);
})

const server = app.listen(5050, () => {
    console.log(`Server started listening to port ${server.address().port}`);
})