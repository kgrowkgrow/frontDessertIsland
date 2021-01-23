import React, { Component, useState } from 'react'; 
import Form from 'react-bootstrap/Form';
import {Button, Container, Row, Col, Card} from 'react-bootstrap';



const LoginForm = ({handleLogin, handleSignupClick}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin({
            username: username,
            password: password
        })
    }

    return (
        <Container className="auth-form-container">
            <Row>
                <Col>
                    <Card className='auth-form' >
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="username" placeholder="Enter username" onChange={handleUsernameChange} />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                                    </Form.Group>
                                    <div style={{'align-items': 'center'}}>
                                        <Button variant="primary" type="submit" > 
                                            Login 
                                        </Button> {' '} 

                                        <Button variant="secondary" type="button" onClick={handleSignupClick} > 
                                            Create Account
                                        </Button>
                                    </div>
                                </Form> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


    


export default LoginForm;