import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToEdit = () => {
        history.push("/edit")
    }

    return (
        <div>
            <div id='navBar'>
                <Navbar bg="dark" variant="dark">
                    <Nav className="navBar">
                        <Nav.Link onClick={goToHome}>Home</Nav.Link>
                        <Nav.Link onClick={goToEdit}>Edit User</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;
