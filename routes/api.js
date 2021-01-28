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

router.delete('/notes', (req, res) => {
    
})

module.exports = router;
