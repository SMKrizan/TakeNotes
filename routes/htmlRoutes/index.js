// router
const router = require('express').Router();

// node dependencies
const path = require('path');

// GET * should return the index.html file.
// adding a route to handle the index.html
router.get('*', (req, res) => {
    // responds with html file to display in browser; 'path' module ensures that correct html location is found regardless of server environment
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// GET /notes should return the notes.html file.
// adding route to handle transfer of an html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

  module.exports = router;