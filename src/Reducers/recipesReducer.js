const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RECIPES':
        return [...state, ...action.recipes]

        case 'LOGOUT_USER':
            return initialState
         
        default:
        return state
    }
}

const initialState = []


export default recipesReducer