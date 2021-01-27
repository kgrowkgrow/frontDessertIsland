const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIAL_COMMENTS':
        return [...action.comments]

        case 'ADD_NEW_COMMENT':
        return [action.comment, ...state]
         
        default:
        return state
    }
}

const initialState = []


export default commentsReducer