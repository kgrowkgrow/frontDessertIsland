import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Button, Container, Row, Col, Card} from 'react-bootstrap';
import {connect} from 'react-redux'
import {editUser} from '../Actions/user'
import {logoutUser} from '../Actions/user';

const EditUser = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [diabetic, setDiabetic] = useState(false)
    const [ratio, setRatio] = useState(null)

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleDiabeticSelect = () => {
        setDiabetic(!diabetic)
    }
    const handleRatioChange = (event) => {
        setRatio(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEdit({
            username: username,
            password: password,
            diabetic: diabetic,
            ratio: ratio
        })
    }

    const handleEdit = (info) => {
        console.log('editing')
        handleEditFetch(info, 'http://localhost:3000/edit')
    }

    const handleEditFetch = (info, request) => {
        let token = localStorage.getItem('token')
        fetch(request, {
          method: 'PATCH',
          headers: {
            'Content-Type': "application/json",
            'Authorization' : `Bearer ${token}`
          },
          body: JSON.stringify({
            name: info.username,
            password: info.password,
            diabetic: info.diabetic,
            carb_ratio: info.ratio
          })
        })
        .then(resp => resp.json())
        .then(data => {
            props.editUser(data.user)
            props.history.push('/')

        })
      }

      const handleDelete = () => {
        let result = window.confirm('Are you sure you want to delete your account?')
        
        let token = localStorage.getItem('token')
        if (result) {
            fetch('http://localhost:3000/delete', {
            method: 'DELETE', 
            headers: {'Content-Type': "application/json",
            'Authorization' : `Bearer ${token}`}})
            .then(resp => resp.json())
            .then(data => {
                console.log('inside handle delete:', data)
                props.logoutUser()
                localStorage.clear()
                props.history.push('/login')
            })
        }
      }

    return (
        <Container className="auth-form-container full-height">
            <Row>
                <Col>
                    <Card className='auth-form'>
                        <Card.Body>
                            <Card.Title>Edit User</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>{' '}
                                        <Form.Control type="username" placeholder="Enter username" onChange={handleUsernameChange}/>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Password</Form.Label>{' '}
                                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                                    </Form.Group>

                                    <Form.Group > 
                                        <Form.Check type="checkbox" label="I have diabetes" onChange={handleDiabeticSelect}/>
                                    </Form.Group>
                                    
                                    {diabetic ? 
                                    <Form.Group> 
                                        <Form.Label>What is your carb-to-insulin ratio?</Form.Label><br/>
                                        {'I use'} <Form.Control type="ratio" placeholder="enter number" onChange={handleRatioChange}/> {'grams of carbs per unit of insulin'}
                                    </Form.Group> : null}

                                    <Button className='signup-button' variant="primary" type="submit">
                                        Submit
                                    </Button>

                                    <Button className='delete-button' variant="danger" onClick={handleDelete}>
                                        Delete Account
                                    </Button>
                                </Form> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

    const mapStateToProps = (state) => {
        return { user: state.user}
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            editUser: (user) => dispatch(editUser(user)),
            logoutUser: () => dispatch(logoutUser())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (EditUser);
