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
                                {name}
                            </span>
                            <br/> 
                            <Image className="recipe-index-img" src={imageUrl} alt="" rounded fluid/>       
                        </Col>
                        <Col xs={8}>
                            <span>{parse(summary)}</span>
                            {/* <div className='index-button-div'> */}
                                <Button className='recipe-index-button' variant="primary" onClick={() => goToCardRecipe(id)}>See Recipe</Button> 
                            {/* </div> */}
                        </Col>
                    </Row>
                    <hr/>
                </Container>
                   
    );
}

export default RecipeCard;
