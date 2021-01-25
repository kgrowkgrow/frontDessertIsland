import React, { Component } from 'react';
import {connect} from 'react-redux'
import RecipeCard from '../Components/RecipeCard';

class SearchResultsContainer extends Component {

    state = {
        page: 0
    } // can do pagination later

    populateRecipeCards = () => {

        if (this.props.recipes !== undefined) {
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
    }}

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
        recipes: state.search
    }
}

export default connect(mapStateToProps) (SearchResultsContainer);
