// middleware added so that app is aware of other routes
const router = require('express').Router();

// file imports
// const notes = require('../lib/db.json');
const manager = require('../lib/manager.js');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
// 1st: short for 'request', this is a string describing the route from which the client will fetch; 
// 2nd: short for 'response', this is a callback function that will execute every time there's a GET request
router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes);
});

// note that a 'param' route must come after the other GET route; id spec should return a single object
router.delete('/notes/:id', (req, res) => {
    const deleteNote = findById(req.params.id, notes);
    if (result) {
        res.json(deleteNote);
    } else {
        res.send(404);
    }
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// creates a server route that listens for 'post' requests: accepts user input to be stored on the server
router.post('/notes', (req, res) => {

    const note = addNote(req.body, notes);
    console.log("req.body: ", req.body);
    console.log("note: ", note);
    
    res.json(note);
});

module.exports = router;