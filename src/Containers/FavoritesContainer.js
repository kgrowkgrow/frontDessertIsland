import React from 'react';
import {connect} from 'react-redux';
import RecipeCard from '../Components/RecipeCard';

const FavoritesContainer = ({favorites}) => {

    const populateFavorites = () => {
        return favorites.map(recipe => {
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

    return (
        <div>
            {populateFavorites()} 
        </div>
    );
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps) (FavoritesContainer);
