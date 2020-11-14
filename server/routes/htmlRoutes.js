// responds to all http requests

// router
const router = require('express').Router();

// node dependencies
const path = require('path');

// GET route to return notes.html file.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// GET route to handle index.html
router.get('*', (req, res) => {
    // responds with html file to display in browser; 'path' module ensures that correct html location is found regardless of server environment
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

  module.exports = router;