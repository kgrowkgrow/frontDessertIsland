import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';

const CommentForm = ({recipeId, user}) => {

    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const postComment = () => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/comments`, {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({
                recipe_id: recipeId, 
                content: comment
                // user_id we can take from token!
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data) // 
        })
    }


    return (
        <div>
            <label>New Comment</label>
            <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" onChange={handleCommentChange}/>
                <InputGroup.Append>
                    <Button variant="info outline-secondary" onClick={postComment}>Post Comment</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {user: state.user.user }
}

export default connect(mapStateToProps) (CommentForm);
