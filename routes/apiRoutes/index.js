// middleware added so that app is aware of other routes
const router = require('express').Router();

// apiRoutes becomes central hub for all routing functions - if application evolves, this will help to keep app modularized.
const notesRoute = require('./notes');
router.use(notesRoute);

module.exports = router;
