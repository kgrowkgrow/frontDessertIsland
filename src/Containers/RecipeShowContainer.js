import React, {useEffect, useState}from 'react';
import { connect } from "react-redux";
import  RecipeShowPic  from "../Components/RecipeShowPic";
import MealInfo from '../Components/MealInfo';
import RecipeInstructions from "./RecipeInstructions";
import CommentsContainer from './CommentsContainer';
import {setInitialComments} from '../Actions/comments';


const RecipeShowContainer = (props) => {

    const [ingredients, setIngredients] = useState(null)
    const [comments, setComments] = useState(null)

    const nameFromProps = props.location.state.name
    const recipes = props.recipes
    
    const singleRecipeArr = recipes.filter(recipe => recipe.name === nameFromProps) 
    const {calories, image_url, instructions, name, net_carbs, ready_in_minutes, serving_size, id} = singleRecipeArr[0]

    useEffect(() => {
        if (ingredients === null || comments === null) {
            fetchRecipeData(id) 
        }
    },[])

    const fetchRecipeData = (id) => {
        let token = localStorage.getItem('token')

        fetch(`http://localhost:3000/get-recipe/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            if (ingredients === null) {
                setIngredients(data.ingredients)
            }
            if (comments === null) {
                setComments(data.comments)
                props.setInitialComments(data.comments)
            }
        })
    }

    return (
        <div>
            <RecipeShowPic imgUrl={image_url} name={name}/>
            <MealInfo recipe={singleRecipeArr[0]}/>
            <RecipeInstructions instructions={instructions} ingredients={ingredients}/>
            {comments !== null ? <CommentsContainer recipeId={id}/> : null}
            
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setInitialComments: (comments) => dispatch(setInitialComments(comments))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RecipeShowContainer);
