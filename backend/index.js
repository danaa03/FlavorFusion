const express = require('express');
const connectDB = require('./db.js');
const itemsModel = require('./models/items');
const cors = require('cors');
const recipesModel = require('./models/Recipes.js');
// const mongoose= require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/getrecipes', (req, res) => {
    recipesModel.find({})
        .then(recipes => res.json(recipes))
        .catch(err => res.json(err));
});

// app.post('/updateRecipe/:id', (req, res) => {
//     const { id } = req.params;
//     const { like } = req.body;

//     recipesModel.findByIdAndUpdate(id, { $set: { like } }, { new: true })
//         .then(updatedRecipe => res.json(updatedRecipe))
//         .catch(err => res.status(400).json({ error: 'Error updating recipe', details: err }));
// });



const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
