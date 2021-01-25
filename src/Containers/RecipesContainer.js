import React, { Component } from 'react';
import {connect} from 'react-redux'
import RecipeCard from '../Components/RecipeCard';

class RecipesContainer extends Component {

    state = {
        page: 0
    } // can do pagination later

    populateRecipeCards = () => {
        return this.props.recipes.map(recipe => {
            return <RecipeCard
            name={recipe.name}
            key={recipe.id}
            id={recipe.id}
            imageUrl={recipe.image_url}
            summary={recipe.summary}
            style={{flex: 1}}
            />
        })
    }

    render() {
        return (
            <div> 
                {this.populateRecipeCards()} 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps) (RecipesContainer);
