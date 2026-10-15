const express = require('express')
const app = express();
const db = require('./db');

const personModel = require('./models/person')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.post('/person', (req, res) => {
   const data = req.body;

    const newPerson = new personModel(data);
    newPerson.save()
        .then(() => {
            res.status(201).send('Person created successfully');
        })
        .catch((err) => {
            res.status(400).send('Error creating person: ' + err.message);
        });
})


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
});