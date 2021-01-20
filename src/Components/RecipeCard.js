import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import parse from 'html-react-parser'


const RecipeCard = ({name, imageUrl, summary, id}) => {

    return (
        <div className='recipe-card'>
            <Card style={{ width: '23rem' }}>
            <Card.Img variant="top" src={imageUrl}  />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {parse(summary)}
                </Card.Text>
                
                <Button variant="primary">See Recipe</Button>
            </Card.Body>
            </Card>
            <br/>
        </div>
    );
}

export default RecipeCard;
