import React from 'react';
import Comment from '../Components/Comment';
import CommentForm from "../Components/CommentForm";

const CommentsContainer = ({comments, recipeId}) => {

    

    const renderComments = () => {
        return comments.map(comment => {
            return <Comment comment={comment} key={comment.id}/>
        })
    }

    return (
        <div>
            <h4><b>Comments</b></h4>
            {renderComments()}
            <CommentForm recipeId={recipeId}/>
            
        </div>
    );
}

export default CommentsContainer;
