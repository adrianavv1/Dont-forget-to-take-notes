//Dependencies//
const express = require('express');
const path = require('path');
const notesArray = require('./db/db.json');

//import the routes that we created
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')


//set up express app//
const app = express();
const PORT = process.env.PORT || 3001;

//sets up express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));

// routes files
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

//Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
});


