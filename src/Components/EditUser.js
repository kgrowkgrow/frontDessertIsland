import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux'
import {editUser} from '../Actions/user'

const EditUser = (props) => {
    // set user state to what's what

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
            // debugger
            // let editFunction = props.editUser
            props.editUser(data.user)
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

    const mapStateToProps = (state) => {
        return { user: state.user}
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            editUser: editUser
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (EditUser);
