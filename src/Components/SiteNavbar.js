import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {logoutUser} from '../Actions/user';
import { Container, Row, Col } from 'react-bootstrap';


const SiteNavbar = (props) => {

    const history = useHistory()

    const goToHome = () => {
        if (localStorage.token ) {
            history.push("/")
        }
    }

    const goToEdit = () => {
        if (localStorage.token ){
            history.push("/edit")
        }
    }

    const handleLogout = () => {
        if (localStorage.token) {
            localStorage.clear()
            props.logoutUser()
            history.push("/login")
        }
    }

    return (
            <div id="nav-bar">
                 <Navbar bg="dark" variant="dark" > 
                 <Container fluid >
                    <Row className="full-width">
                        <Col > 
                            <Nav className="navBar justify-content-start"> 
                            <Nav.Link onClick={goToHome}>Home</Nav.Link> 
                            <Nav.Link onClick={goToEdit}>Edit User</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link> 
                            </Nav>  
                        </Col>
                        <Col className="center-text"> 
                            <Navbar.Brand>Welcome to Dessert Island!</Navbar.Brand> 
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                 </Container>                       
                </Navbar> 
            </div>
    );

}
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps) (SiteNavbar);
