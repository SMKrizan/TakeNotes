//this is the server/nodeHub

// connects to routing hub
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// facilitates GET/POST functionality
const express = require('express');

// instantiates server
const app = express();

// sets environment variable for Heroku to run the app (if set, and if not defaults to 80)
const PORT = process.env.PORT || 3001;

// instructs server to make specified files 'static resources', e.g. readily available (rather than gated behind server endpoint); important to put this above the routes.
app.use(express.static('public'));  

// each POST request will pass through all 'app.use' middlewear functions before getting to intended endpoint; these 2 need to be set up every time you create a server looking to accept POST data in the form of JSON.
// #1 converts incoming POST data to key/value pairs; 'extended: true' tells server there may be nested data
app.use(express.urlencoded({ extended: true }));
// #2 parses incoming JSON data into req.body object
app.use(express.json());

// tells server to use apiRouting hub if client navigates to <host>/api
app.use('/api', apiRoutes);
// tells server to provide HTML routes if "/" is endpoint 
app.use('/', htmlRoutes);

// listens/binds connections on specified host and port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
