import React from 'react';
import parse from 'html-react-parser'

const RecipeInstructions = ({instructions}) => {
    return (
        <div>
          <h5>Instructions</h5>  
            {parse(instructions)}
        </div>
    );
}

export default RecipeInstructions;
