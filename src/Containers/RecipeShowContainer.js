import React from 'react';
import { connect } from "react-redux";
import  RecipeShowPic  from "../Components/RecipeShowPic";
import MealInfo from '../Components/MealInfo';



const RecipeShowContainer = (props) => {
    const nameFromProps = props.location.state.name
    const recipes = props.recipes
    
    const singleRecipeArr = recipes.filter(recipe => recipe.name === nameFromProps)
    const {calories, image_url, instructions, name, net_carbs, ready_in_minutes, serving_size} = singleRecipeArr[0]

    return (
        <div>
            <RecipeShowPic imgUrl={image_url} name={name}/>
            <MealInfo recipe={singleRecipeArr[0]}/>
        
        
        </div>
    );
}

const mapStateToProps = state => {
    return {recipes: state.recipes}
}

export default connect(mapStateToProps) (RecipeShowContainer);
