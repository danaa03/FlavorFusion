import React, { useState } from "react";

function PIbar() {
    const [ingredientCount, setIngredientCount] = useState(0);

    const addIngredient = () => {
        setIngredientCount(ingredientCount + 1);
    };

    return (
        <div className="pcontainer">
                <h1>Enter Ingredients</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            {[...Array(ingredientCount)].map((_, index) => (
                <div className="input-group mb-3" key={index}>
                    <span className="input-group-text" id={`inputGroup-sizing-default-${index}`}></span>
                    <input type="text" className="form-control" aria-label={`Sizing example input ${index}`} aria-describedby={`inputGroup-sizing-default-${index}`}/>
                </div>
            ))}
            <button type="button" className="pbtn1" onClick={addIngredient}>Add more Ingredient</button>
            <button type="button" className="pbtn2">Generate Recipe</button>
        </div>
    );
}

export default PIbar;
