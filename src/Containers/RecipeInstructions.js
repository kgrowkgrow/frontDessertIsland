import React from 'react';
import parse from 'html-react-parser'

const RecipeInstructions = ({instructions, ingredients}) => {
    return (
        <div>
          <h5>Instructions</h5>  
            <p>{parse(instructions)}</p>
        </div>
    );
}

export default RecipeInstructions;
