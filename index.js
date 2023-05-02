const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const chef = require('./data/chefData.json');
const recipes = require('./data/recipes.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('hello from server')
});

app.get('/chef', (req, res) =>{
    res.send(chef)
})
app.get('/chef/:id', (req,res) =>{
   const id = req.params.id;
   const chefId = chef.find(c=> c._id === id);
   res.send(chefId)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})
app.get('/recipes/:id',(req,res) =>{
    const id = req.params.id;
    const recipe = recipes.filter(r=>r.recipe_id===id);
    res.send(recipe)
})

app.listen(port, () => {
    console.log(`your server port is ${port}`);
})