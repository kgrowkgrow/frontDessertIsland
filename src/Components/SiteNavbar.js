import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {logoutUser} from '../Actions/user';

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
            history.push('/login')
        }
    }

    return (
        <div>
            <div id='navBar'>
                 <Navbar bg="dark" variant="dark"> 
                    <Nav className="navBar">
                        <Nav.Link onClick={goToHome}>Home</Nav.Link> 
                        <Nav.Link onClick={goToEdit}>Edit User</Nav.Link>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link> 
                    </Nav> 
                    <Navbar.Brand>Welcome to Dessert Island!</Navbar.Brand>
                </Navbar> 
            </div>
        </div>
    );

}
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps) (SiteNavbar);
