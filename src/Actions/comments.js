export const setInitialComments = (comments = []) => {
    return {
        type: 'SET_INITIAL_COMMENTS',
        comments
    }
}
export const addNewComment = (comment = {}) => {
    return {
        type: 'ADD_NEW_COMMENT',
        comment
    }
}
