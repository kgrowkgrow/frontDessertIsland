import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';
import {loginUser} from '../Actions/user';
import {createUser} from '../Actions/user'
// import actions for mapDispatchToProps


class LoginPage extends Component {

    state = {
        user:"",
        whichForm: "login"
    }

    handleLogin = (info) => {
        console.log('login')
        this.handleLoginFetch(info, 'http://localhost:3000/login' )
      }
    
      handleSignup = (info) => {
        console.log('sign up')
        this.handleSignupFetch(info, 'http://localhost:3000/users')
      }
    
      handleLoginFetch = (info, request) => {
        fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            name: info.username,
            password: info.password
          })
        })
        .then(resp => resp.json())
        .then(data => {
            this.props.loginUser(data.user)
            localStorage.setItem('token', data.token)

            if (localStorage.getItem('token') !== "undefined") {
              this.setState({user: data.user})
                this.props.history.push('/')
            } else {
                alert(data.error)
                this.props.history.push('/login')
            }
          })
        }

      handleSignupFetch = (info, request) => {
        fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
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
            this.props.createUser(data.user)
            localStorage.setItem('token', data.token)
            this.props.history.push('/')
        })
      }

      handleSignupClick = () => {
          this.setState((prevState) => {
              return {...prevState, whichForm: 'signup'}
          })
      }

    render() {
        return (
            <div>
                {this.state.whichForm === "login" ? 
                <LoginForm 
                handleAuthFetch={this.handleAuthFetch} 
                handleLogin={this.handleLogin}
                handleSignupClick={this.handleSignupClick}
                /> :
            <SignupForm
                 handleAuthFetch={this.handleAuthFetch} 
                 handleSignup={this.handleSignup}
                />}
            </div>
        );
    }

    // mapDispatchToProps = (dispatch) => {
    //     return {
    //         loginUser: (user) => dispatch(loginUser(user))
    //     }
    // }

}

export default connect(null, {loginUser, createUser}) (LoginPage);
