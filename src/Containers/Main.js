import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {connect} from 'react-redux'
import SearchBar from '../Components/SearchBar';


class Main extends Component {

    render() {
        return (
            <div>
                <Container> 
                     {/* <FeaturedRecipe/> stretchy goal */}
                     <SearchBar/>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state
    return {user: user}
}

export default connect(mapStateToProps) (Main);
