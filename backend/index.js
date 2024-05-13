const express = require('express');
const connectDB = require('./db.js');
// const itemsModel = require('./models/items');
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

app.put('/updateLike/:recipeId', async (req, res) => {
    const { recipeId } = req.params;
    const { like } = req.body;
    try {
        const updatedRecipe = await recipesModel.findByIdAndUpdate(
            recipeId,
            { $set: { like: like } }, // Update the like field
            { new: true }
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        return res.status(200).json({ message: 'Like updated successfully', recipe: updatedRecipe });
    } catch (error) {
        console.error('Error updating like:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});



// const {like}=req.body;

//     const newrecipe={};

//     if (like){newrecipe.like=like};

//     const likedrecipe=recipesModel.findByIdAndUpdate(req.params.id)
//     if (!likedrecipe){return res.status(404).send("Not found")}

//     likedrecipe=await recipesModel.findByIdAndUpdate(req.params.id,{$set:newrecipe} , {new:true})
// Update recipe like status
// app.put('/likedrecipe/:id', async (req, res) => {
    
//     try {
//         const { id } = req.params;
//         const { like } = req.body;
        
//         // Update the like status of the recipe with the given ID
//         const updatedRecipe = await recipesModel.findByIdAndUpdate(id, { like }, { new: true });

//         // Respond with the updated recipe
//         res.json(updatedRecipe);
//     } catch (error) {
//         // Handle any errors
//         console.error('Error updating recipe like status:', error);
//         res.status(500).json({ message: 'Failed to update recipe like status' });
//     }
// });



// app.put('updateRecipe/:id', async (req, res) => {
//     const { id } = req.params;
//     const like=1;

//     // Update the recipe's like field in the database
//     recipesModel.findByIdAndUpdate(id, { like }, { new: true })
//         .then(updatedRecipe => res.json(updatedRecipe))
//         .catch(err => res.status(400).json({ error: 'Error updating recipe', details: err }));
// });





const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
