const apiRouter = require('express').Router();
const store = require('../db/store')

apiRouter.get('/notes', (req,res) => {
    store
    .getNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((error) => res.status(500).json(error))
})

apiRouter.post('/notes', (req,res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((error) => res.status(500).json(error))
})

apiRouter.delete('/notes/:id', (req,res) => {
    store
    .removeNote(req.params.id)
    .then(()=> res.json({ok:true}))
    .catch((error) => res.status(500).json(error))
})

module.exports = apiRouter;