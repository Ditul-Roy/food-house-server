const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const chef = require('./data/chefData.json')

app.use(cors());
app.get('/', (req, res) =>{
    res.send('hello from server')
});

app.get('/chef', (req, res) =>{
    res.send(chef)
})

app.listen(port, () => {
    console.log(`your server port is ${port}`);
})