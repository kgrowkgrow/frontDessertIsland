import React, { Component } from 'react';
import {connect} from 'react-redux'
import SearchBar from '../Components/SearchBar';
import {Container, Button, Row, Col} from 'react-bootstrap';


class Main extends Component {

    goToRecipeIndex = () => {
        console.log(this.props)
        this.props.history.push('/recipes')
    }

    render() {
        return (
                <Container fluid className="main-container full-height"> 
                <Row>
                    <Col></Col>
                    <Col xs={4}>
                        <Row>
                           <SearchBar/> 
                        </Row>
                        <Row>
                            <Button className="go-to-index-button" variant="primary" size="lg" block onClick={this.goToRecipeIndex}>
                                See all recipes!
                            </Button>
                        </Row>
                        
                       
                    </Col>
                    <Col></Col>
                </Row>
                     {/* <FeaturedRecipe/> stretchy goal */}
                </Container>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state
    return {user: user}
}

export default connect(mapStateToProps) (Main);
