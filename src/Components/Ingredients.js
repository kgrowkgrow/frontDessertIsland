import React from 'react';

const Ingredients = ({ingredients}) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const populateIngredients = () => {
        return ingredients.map(ingredient => {
            return <p key={ingredient.name}> {capitalize(ingredient.name)}: {Math.round(ingredient.amount * 10) / 10} {ingredient.unit}</p>
        })
    }

    return (
        <div>
            <h4>Ingredients:</h4>
                {ingredients ? populateIngredients() : null}      
        </div>
    );
}

export default Ingredients;
