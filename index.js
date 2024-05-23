const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

let dataStore = [];

app.get('/fetch/fake/data', (req, res) => {
    res.json(dataStore);
});

app.post('/post/fake/data', (req, res) => {
    const newData = req.body;
    dataStore.push(newData);
    res.status(201).json(newData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
