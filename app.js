const express = require('express'), bodyParser = require('body-parser');
const app = express();


const gettingStarted = require('./gettingStarted');
const respondBack = require('./respondBack');

app.use(bodyParser.json());
app.use('/my-first-app/getting-started',gettingStarted);
app.use('/my-first-app/respondBack',respondBack);

module.exports = app;