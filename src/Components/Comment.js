import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <span>{comment.content}</span>
            <hr/>
        </div>
    );
}


export default Comment;
