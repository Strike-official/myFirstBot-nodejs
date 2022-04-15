const express = require('express');
const app = express();

const gettingStarted = require('./gettingStarted');

app.use('/my-first-app/getting-started',gettingStarted);

module.exports = app;