const router = require('express').Router()
const { notes } = require('../../db/db.json')
const { createNewNote } = require('../../lib/notes');
const uniqueid = require('uniqueid')

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqueid();
  
    const note = createNewNote(req.body, notes);
    res.json(note);
})

module.exports = router; 