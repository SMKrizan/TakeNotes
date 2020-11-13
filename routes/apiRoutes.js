// this file responds to front-end requests 
// middleware resources
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
// file imports
const notes = require('../lib/db.json');
// const manager = require('../lib/notesManager.js');
// const index = require('../public/assets/js/index.js');
// GET /api/notes should read the db.json file and return all saved notes as JSON
// happens when notes page loads "noteList"
router.get('/notes', (req, res) => {
    fs.readFile('./lib/db.json', function (err, data) {
        if (err) {
            throw err; 
        }
        let allNotes = JSON.parse(data);
        return res.json(allNotes);
    });
});
router.post('/notes', (req, res) => {
    fs.readFile('./lib/db.json', function (err, data) {
        if (err) {
            throw err; 
        }
        let allNotes = JSON.parse(data);
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid.time()
        };
        allNotes.push(newNote);
        fs.writeFile('./lib/db.json', JSON.stringify(allNotes, null, 2),
        (error) => {
            if (error) {
                throw error;
            }
            res.send('200');
        });
    });
})
// note that a 'param' route must come after the other GET route; id spec should return a single object
// happens when 
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


// // this file responds to front-end requests 

// // middleware resources
// const router = require('express').Router();
// const fs = require('fs');
// const path = require('path');
// const uniqid = require('uniqid');

// // file imports
// const notes = require('../lib/db.json');
// // const manager = require('../lib/notesManager.js');
// // const index = require('../public/assets/js/index.js');

// // GET /api/notes should read the db.json file and return all saved notes as JSON
// // happens when notes page loads "noteList"
// router.get('/notes', (req, res) => {
//     fs.readFile('./lib/db.json', function (err, data) {
//         if (err) {
//             throw err; 
//         }
//         let allNotes = JSON.parse(data);
//         return res.json(allNotes);
//     });
// });

// router.post('/notes', (req, res) => {
//     fs.readFile('./lib/db.json', function (err, data) {
//         if (err) {
//             throw err; 
//         }
//         let allNotes = JSON.parse(data);
//         let newNote = {
//             title: req.body.title,
//             text: req.body.text,
//             id: uniqid.time()
//         };
//         allNotes.push(newNote);
//         fs.writeFile('./lib/db.json', JSON.stringify(allNotes, null, 2),
//         (error) => {
//             if (error) {
//                 throw error;
//             }
//             res.send('200');
//         });
//     });
// })

// // note that a 'param' route must come after the other GET route; id spec should return a single object
// // happens when 
// router.delete('/notes/:id', (req, res) => {
//     const deleteNote = findById(req.params.id, notes);
//     if (result) {
//         res.json(deleteNote);
//     } else {
//         res.send(404);
//     }
// });

// // POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// // creates a server route that listens for 'post' requests: accepts user input to be stored on the server
// router.post('/notes', (req, res) => {

//     const note = addNote(req.body, notes);
//     console.log("req.body: ", req.body);
//     console.log("note: ", note);
    
//     res.json(note);
// });

// module.exports = router;