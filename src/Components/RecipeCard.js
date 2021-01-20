import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import parse from 'html-react-parser'
import { useHistory } from "react-router-dom";



const RecipeCard = ({name, imageUrl, summary, id}) => {

    const history = useHistory()

    const goToCardRecipe = (id) => {
        history.push({
            pathname: `/recipes/${name}`,
            state: { name: name }
        })
    }

    return (
        <div className='recipe-card'>
            <Card style={{ width: '23rem' }}>
            <Card.Img variant="top" src={imageUrl}  />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {parse(summary)}
                </Card.Text>
                
                <Button variant="primary" onClick={() => goToCardRecipe(id)}>See Recipe</Button>
            </Card.Body>
            </Card>
            <br/>
        </div>
    );
}

export default RecipeCard;
