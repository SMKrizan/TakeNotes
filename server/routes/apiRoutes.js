// this file responds to front-end requests

// middleware resources
const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');

// GET /api/notes should read the db.json file and return all saved notes as JSON
// happens when notes page loads "noteList"
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', function (err, data) {
        if (err) {
            throw err;
        }
        let allNotes = JSON.parse(data);
        return res.json(allNotes);
    });
});

// POST /api/notes receives a new note and returns the new note to the client, along with a unique id
// creates a server route that listens for 'post' requests: accepts user input to be stored on the server
router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', function (err, data) {
        if (err) {
            throw err;
        }
        let allNotes = JSON.parse(data);
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid.time()
        }
        allNotes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(allNotes, null, 2),
            (error) => {
                if (error) {
                    throw error;
                }
                res.send('200');
            });
    });
})

// note that a 'param' route must come after the other GET route; id spec should return a single object
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete, read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;

    fs.readFile('./db/db.json', function (err, data) {
        if (err) {
            throw err;
        }
        let allNotes = JSON.parse(data);
        console.log('allNotes1: ', allNotes);
        let filteredNotes = allNotes.filter(note => note.id !== id);
        fs.writeFile('./db/db.json', JSON.stringify(filteredNotes, null, 2),
            (error) => {
                if (error) {
                    throw error;
                }
                return res.json(filteredNotes);
            });
    });
});

module.exports = router;