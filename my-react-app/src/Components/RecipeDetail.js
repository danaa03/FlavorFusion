import React from 'react';
import icon from './icon.png';

function RecipeDetail(props) {
    console.log('Props in RecipeDetail:', props); // Log props to check their values

    return (
        <div className="RecipeDetail">
             <div className="row align-items-center justify-content-center">
                <div className="col text-center">
                    <h1>{props.recipeTitle}</h1>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-3 d-flex justify-content-center">
                    <img src={icon} className="img-thumbnail" alt="..." />
                </div>
                <div className="col-9 mb-3">
                    <h3>Recipe Ingredients:</h3>
                    <ul>
            {props.recipeIngredients
                .slice(1, -1) // Remove the first and last square brackets
                .split(/\s(?=\d(?!-))/) // Split if a space is followed by a digit but not by a hyphen
                .map((ingredient, index) => (
                    ingredient.trim() && <li key={index}>{ingredient.trim()}</li>
                ))
            }
        </ul>
                </div>
            </div>
                <div style={{ marginLeft: '1.5rem', marginRight: '1.5rem' }}>
                <h3>Recipe Instructions: </h3>
                <ul >
            {props.recipeInstructions.split('.').map((instruction, index) => (
                instruction.trim() && <li key={index}>{instruction.trim()}</li>
            ))}
        </ul>
                </div>
            {/* <p>Image Name: {props.recipeImageName}</p> */}
            {/* Other components */}
        </div>
    );
}

export default RecipeDetail;
