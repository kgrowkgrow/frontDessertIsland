const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SEARCH_RECIPES':
        return action.recipes

        case 'LOGOUT_USER':
            return initialState
         
        default:
        return state
    }
}

const initialState = []


export default searchReducer