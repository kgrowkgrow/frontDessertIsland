import React, {useEffect, useState}from 'react';
import { connect } from "react-redux";
import  RecipeShowPic  from "../Components/RecipeShowPic";
import MealInfo from '../Components/MealInfo';
import RecipeInstructions from "./RecipeInstructions";
import CommentsContainer from './CommentsContainer';
import {setInitialComments} from '../Actions/comments';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Ingredients from '../Components/Ingredients';
import { addNewFavorite } from '../Actions/favorites';


const RecipeShowContainer = (props) => {

    const [ingredients, setIngredients] = useState(null)
    const [comments, setComments] = useState(null)

    const nameFromProps = props.location.state.name
    const recipes = props.recipes
    const favorites = props.favorites
    
    const singleRecipeArr = recipes.filter(recipe => recipe.name === nameFromProps) 
    const {image_url, instructions, name, id} = singleRecipeArr[0]

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

    const handleFavorite = () => {

        if (!favorites.includes(singleRecipeArr[0])) {

        
        // needs to post new favorite and then update redux state with new favorite too
        let token = localStorage.getItem('token')
        fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({
                recipe_id: id 
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            props.addNewFavorite(data)    
        })} else {
            return
        }
    }

    return (
        <Container className="full-height" fluid>
            <Row className="full-height">
                <Col className="recipe-show-column">
                    <Row className="recipe-show-pic"> 
                        <RecipeShowPic imgUrl={image_url} name={name}/> 
                    </Row>  
                    <hr/> 

                    <Row className="recipe-info">
                        <MealInfo recipe={singleRecipeArr[0]}/> 
                    </Row>   
                </Col>

                <Col className="recipe-ingredients">
                    <Ingredients ingredients={ingredients}/>
                </Col>

                <Col className="recipe-directions">
                    <Row>
                    <RecipeInstructions instructions={instructions} ingredients={ingredients}/>
                    </Row>
                    <Row>
                        <Button variant="primary" onClick={handleFavorite}>Add dessert to favorites</Button>
                    </Row>
                </Col>        
            </Row> 
            <hr/>
            <Row>
                <Container className="comments-container">   
                    <Row className="comment">
                        {comments !== null ? <CommentsContainer recipeId={id}/> : null} 
                    </Row>
                </Container>
            </Row>
        </Container>
           
            // <RecipeShowPic imgUrl={image_url} name={name}/>
            // <MealInfo recipe={singleRecipeArr[0]}/>
            // <RecipeInstructions instructions={instructions} ingredients={ingredients}/>
            // {comments !== null ? <CommentsContainer recipeId={id}/> : null} 
                 
       
    );
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setInitialComments: (comments) => dispatch(setInitialComments(comments)),
        addNewFavorite: (recipe) => dispatch(addNewFavorite(recipe))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RecipeShowContainer);
