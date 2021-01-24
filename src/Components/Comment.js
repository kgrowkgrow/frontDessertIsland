import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <span>{comment.content}</span>
            <hr/>
        </div>
    );
}

// how we gonna do likes? i guess just a button and some info on the side here

export default Comment;
