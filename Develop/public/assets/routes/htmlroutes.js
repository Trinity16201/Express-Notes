const html = require('express').Router();
const path = require('path');

express.get('/', (req,res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"))
})

express.get('/notes', (req,res) => {
    res.sendFile(path.join(_dirname, "../public/notes.html"))
})

module.exports = html;
