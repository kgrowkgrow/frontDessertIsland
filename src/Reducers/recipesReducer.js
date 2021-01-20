const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RECIPES':
        return [...state, ...action.recipes]
         
        default:
        return state
    }
}

const initialState = []


export default recipesReducer