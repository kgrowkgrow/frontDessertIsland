import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {addNewComment} from '../Actions/comments';

const CommentForm = ({recipeId, user, addNewComment}) => {

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
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data) 
            addNewComment(data)
        })
    }

    return (
        <div className="full-width">
            <label><b>Post New Comment</b></label>
            <InputGroup >
                <FormControl as="textarea" aria-label="With textarea" onChange={handleCommentChange}/>
                {/* <InputGroup.Append> 
                    <Button variant="info" onClick={postComment}>Post Comment</Button> 
                 </InputGroup.Append> */}
            </InputGroup>
           <Button className="post-comment-button" variant="info" onClick={postComment}>Post Comment</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {user: state.user.user }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewComment: (comment) => dispatch(addNewComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommentForm);
