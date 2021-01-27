import React, { Component } from 'react';
import {connect} from 'react-redux'
import RecipeCard from '../Components/RecipeCard';
import Button from 'react-bootstrap/Button';

class RecipesContainer extends Component {

    state = {
        page: 0
    } // can do pagination later

    goNext = () => {
        this.setState({
            page: this.state.page + 1
        })
        window.scrollTo(0, 0)
    }

    goBack = () => {
        if (this.state.page > 0)
        this.setState({
            page: this.state.page - 1
        })
        window.scrollTo(0, 0)
    }
    populateRecipeCards = () => {

        let recipes = this.props.recipes.slice(this.state.page * 10, (this.state.page * 10) + 10)

        // return this.props.recipes.map(recipe => {
        return recipes.map(recipe => {
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
                <div className='index-page-button-div'>
                    <Button variant="dark" onClick={this.goBack}>Previous Page</Button> {" "}
                    <Button variant="dark" onClick={this.goNext}>Next Page</Button> 
                </div>
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
