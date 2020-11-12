// middleware added so that app is aware of other routes
const router = require('express').Router();

// apiRoutes becomes central hub for all routing functions - if application evolves, this will help to keep app modularized.
const notesRoutes = require('./notesRoutes');
router.use(notesRoutes);

module.exports = router;

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

