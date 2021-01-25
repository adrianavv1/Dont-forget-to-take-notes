const router = require('express').Router();
const path = require('path');
const fs =require('fs');

const dbData = require('../db/db.json');
const { route } = require('./html');

router.get('/notes', (req, res) => {
   res.json(dbData)
})

router.post('/notes', (req, res) => {
    let dataFromRequest = req.body;

    console.log(dataFromRequest.title)

    let postedData = {
        title: dataFromRequest.title,
        text: dataFromRequest.text
    }

    dbData.push(postedData)

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbData))


    res.send("Updated the db file!")
})

module.exports = router;

// <form>
//     <input name="username" type="text"></input>
//     <input name="email" type="text"></input>
//     <button type="submit">Submit</button>
// </form>