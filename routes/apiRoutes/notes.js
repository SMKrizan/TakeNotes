// router
const router = require('express').Router();

// file imports
const { notes } = require('../../db/db.json');

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// the route by which the front-end can request data; two inputs are required: 
// 1st: short for 'request', this is a string describing the route from which the client will fetch; 
// 2nd: short for 'response', this is a callback function that will execute every time there's a GET request
// note: using 'send' method from res parameter to send string/data to client
router.get('/notes', (req, res) => {
    let results = notes;
    // calling filterByQuery function in router.get callback:
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// note that a 'param' route must come after the other GET route; id spec should return a single object
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// creates a server route that listens for 'post' requests: accepts user input to be stored on the server
router.post('/notes', (req, res) => {
    // set new id to be one greater than the current highest index/id value (list order within array = index value: NOTE this method works only if data are not removed from the array)
    req.body.id = notes.length.toString();

    // if an object is missing key data or is input incorrectly, send back 404 error
    if(!validateNotes(req.body)) {
        // response method relays message to the request-making client
        res.status(400).send('Your entry is not properly formatted.');
    } else {
        // adds note to json file and notes array
        const note = addNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;