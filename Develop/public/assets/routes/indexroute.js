const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./api');
const serverRouter = require('./server');

const app = express();

app.use('/api', apiRouter);
app.use('/server', serverRouter);

module.exports = app;