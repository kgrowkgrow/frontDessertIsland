import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Header from '../Components/Header';
import Container from 'react-bootstrap/Container';


class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Header/>   
                    Main 
                </Container>
            </div>
        );
    }
}

export default Main;
