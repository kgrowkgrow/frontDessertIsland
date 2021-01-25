const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SEARCH_RECIPES':
        return action.recipes
         
        default:
        return state
    }
}

const initialState = []


export default searchReducer