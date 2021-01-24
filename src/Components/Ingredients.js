import React from 'react';

const Ingredients = ({ingredients}) => {

    const populateIngredients = () => {
        return ingredients.map(ingredient => {
            return <li key={ingredient.name}> {ingredient.name}: {ingredient.amount}{ingredient.unit}</li>
        })
    }

    return (
        <div>
            <h4>Ingredients:</h4>
            <ul>
                {ingredients ? populateIngredients() : null}
            </ul>
        </div>
    );
}

export default Ingredients;
