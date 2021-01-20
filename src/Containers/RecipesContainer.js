import React, { Component } from 'react';
import {connect} from 'react-redux'
import RecipeCard from '../Components/RecipeCard';
import CardDeck from 'react-bootstrap/CardDeck'


class RecipesContainer extends Component {

    state = {
        page: 0
    } // can do pagination later

    populateRecipeCards = () => {
        return this.props.recipes.map(recipe => {
            return <RecipeCard
            name={recipe.name}
            key={recipe.id}
            imageUrl={recipe.image_url}
            summary={recipe.summary}
            style={{flex: 1}}
            />
        })
    }

    render() {
        return (
            // probably will do css on this div
            <div> 
                <CardDeck style={{display: 'flex', flexDirection: 'column'}}>
                    {this.populateRecipeCards()} 
                </CardDeck>
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
