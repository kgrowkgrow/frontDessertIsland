import React from 'react';
import {Button, Container, Row, Col, Image} from 'react-bootstrap';
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
                <Container fluid className="recipe-card" >
                    <Row>
                        <Col xs={4}>
                            <span>
                                <b>{name}</b>
                            </span>
                            <br/> 
                            <Image className="recipe-index-img" src={imageUrl} alt="" rounded fluid onClick={() => goToCardRecipe(id)}/>       
                        </Col>
                        <Col xs={8}>
                            <span>{parse(summary)}</span>
                                <Button className='recipe-index-button' variant="primary" onClick={() => goToCardRecipe(id)}>See Recipe</Button> 
                        </Col>
                    </Row>
                    <hr/>
                </Container>
                   
    );
}

export default RecipeCard;
