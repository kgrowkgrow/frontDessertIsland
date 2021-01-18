//   

import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignupForm = ({handleSignup}) => {

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
    const handleDiabeticSelect = (event) => {
        setDiabetic(!diabetic)
    }
    const handleRatioChange = (event) => {
        setRatio(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSignup({
            username: username,
            password: password,
            diabetic: diabetic,
            ratio: ratio
        })
    }

    return (
        <div>
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
            </Form> 
        </div>
    );
}

export default SignupForm;

