//Dependencies//
const express = require('express');
// const path =require('path');

//import the routes that we created
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')


//set up express app//
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static)(path.join(__dirname, "public"));

app.use('/html', htmlRoutes)
app.use('/api', apiRoutes)


app.listen(PORT, () => {
    console.log('The app is running!')
})


