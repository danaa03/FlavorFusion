import React, { useState } from "react";
import axios from 'axios';
import { BiHeart } from 'react-icons/bi';
// import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { HeartFill } from 'react-bootstrap-icons';

function Ibar() {
    //to update dabase with a like
    // const likeRecipe = (id) => {
    //     // Send a POST request to update like status
    //     axios.post(`http://localhost:8080/updateRecipe/${id}`, { like: true })
    //         .then(response => {
    //             // Handle successful update if needed
    //         })
    //         .catch(error => {
    //             // Handle error if needed
    //             console.error('Error updating recipe:', error);
    //         });
    // };

    ///enlarge the recipe
    // const history = useHistory();

    // const handleClick = () => {
    //     history.push('/Page3');
    // };

    //////////// to get recipes
    const [ingredients, setIngredients] = useState([""]);

    const addIngredient = () => {
        setIngredients([...ingredients, ""]);
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
        console.log(newIngredients)
    };

    const [recipes, setRecipes] = useState([]);

    const generateRecipe = () => {
        axios.get('http://localhost:8080/getrecipes')
        .then(response => {
            console.log('Response:', response.data); // Log the response data
            setRecipes(response.data);
        })
        .catch(err => console.error('Error fetching data:', err));
    };

    // display matching all ingrediants------------------------------------------------
    // const getMatchedRecipes = () => {
    //     // Check if recipes is empty
    //     if (recipes.length === 0) {
    //         return [];
    //     }
    
    //     // Check if ingredients is empty
    //     if (ingredients.length === 0) {
    //         return [];
    //     }
    
    //     // Count the number of matched ingredients for each recipe
    //     const matchedRecipes = recipes.filter(recipe => {
    //         if (!recipe.Ingredients || typeof recipe.Ingredients !== 'string') {
    //             return false; // Skip recipes with invalid Ingredients
    //         }
    
    //         // Parse the Ingredients string into an array
    //         const recipeIngredients = recipe.Ingredients
    //             .replace('[', '') // Remove '[' character
    //             .replace(']', '') // Remove ']' character
    //             .split(/\s(?=\d)/); // Split the string by whitespace followed by a digit
    
    //         // Check if any of the ingredients match the given ingredients
    //         return ingredients.every(ingredient => {
    //             return recipeIngredients.some(recipeIngredient => recipeIngredient.toLowerCase().includes(ingredient.toLowerCase()));
    //         });
    //     });
    
    //     return matchedRecipes;
    // };

    //display even if just one matches and it sorts data on the basis of maximum matched ingredients--------------------------------

    const getMatchedRecipes = () => {
        // Check if recipes or ingredients are empty
        if (recipes.length === 0 || ingredients.length === 0) {
            return [];
        }
    
        // Filter recipes based on matched ingredients
        const matchedRecipes = recipes.map(recipe => {
            if (!recipe.Ingredients || typeof recipe.Ingredients !== 'string') {
                return { ...recipe, matchedIngredientCount: 0 }; // Return recipe with 0 matched ingredients
            }
    
            // Parse the Ingredients string into an array
            const recipeIngredients = recipe.Ingredients
                .replace('[', '') // Remove '[' character
                .replace(']', '') // Remove ']' character
                .split(/\s(?=\d)/); // Split the string by whitespace followed by a digit
    
            // Count the number of matched ingredients
            const matchedIngredientCount = ingredients.reduce((count, ingredient) => {
                if (recipeIngredients.some(recipeIngredient => recipeIngredient.toLowerCase().includes(ingredient.toLowerCase()))) {
                    return count + 1;
                }
                return count;
            }, 0);
    
            // Add the matched ingredient count to the recipe object
            return { ...recipe, matchedIngredientCount };
        });
    
        // Filter out recipes with matched ingredient count greater than 0
        const filteredRecipes = matchedRecipes.filter(recipe => recipe.matchedIngredientCount > 0);
    
        // Sort recipes based on the number of matched ingredients in descending order
        const sortedRecipes = filteredRecipes.sort((a, b) => b.matchedIngredientCount - a.matchedIngredientCount);
    
        return sortedRecipes;
    };
    
    
    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };
     
    
    return (
        <div>
            <div className="container">
                <h1>Enter Ingredients</h1>
                {ingredients.map((ingredient, index) => (
                    <div className="input-group mb-3" key={index}>
                        <span className="input-group-text" id={`inputGroup-sizing-default-${index}`}>Ingredient {index + 1}</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label={`Sizing example input ${index}`}
                            aria-describedby={`inputGroup-sizing-default-${index}`}
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(index, e.target.value)}
                        />
                        <button type="button" className="btn btn-danger" onClick={() => removeIngredient(index)}>X</button>
                    </div>
                ))}
                <button type="button" className="btn1" onClick={addIngredient}>Add more Ingredient</button>
                <button type="button" className="btn2" onClick={generateRecipe}>Generate Recipe</button>
            </div>
            {/* Available Recipe */}
            <div className="container2">
                <div className="recipe-container">
            <h1>Available Recipes</h1>
            <p className="recipe_matches">{getMatchedRecipes().length} matched recipes found.</p>
            {getMatchedRecipes().length > 0 ? (
                <table className="table table-striped recipe-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Ingredients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getMatchedRecipes().slice(0, 1000).map((recipe, index) => (
                            <tr key={recipe._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{recipe.Title}
                                        {/* to display matched ingredients count */}
                                    <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
                                        <p></p>
                                        ({recipe.matchedIngredientCount} matched ingredients)
                                    </div>
                                    <a className="nav-link" href="/Page3">See Full Recipe</a>
                                </td>
                                <td>{recipe.Ingredients}</td>
                                {/* <td><img src={require(`./FoodImages/${recipe.Image_Name}.jpg`)} alt="Recipe" /></td> */}
                                <td className="heart-icon"><BiHeart/></td>
                                {/* <td className="heart-icon"><BiHeart onClick={() => likeRecipe(recipe._id)} /></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p></p>
            )}
        </div>
            </div>
        </div>
    );
}

export default Ibar;
