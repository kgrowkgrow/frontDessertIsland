import React from 'react';
import {connect} from 'react-redux';
import Comment from '../Components/Comment';
import CommentForm from "../Components/CommentForm";

const CommentsContainer = ({comments, recipeId, addNewComment}) => {

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

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps) (CommentsContainer);
