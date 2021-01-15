import React, { Component } from 'react';

class Form extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    // use bootstrap form here, can use d-flex, flex grow?(maybe?) and also just align-items-center in its parent

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Form;
