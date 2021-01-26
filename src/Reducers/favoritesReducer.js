const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITES':
            return [...state, ...action.favorites]

        case 'ADD_NEW_FAVORITE':
            return [...state, action.favorite]

        case 'LOGOUT_USER':
            return initialState
        
        default: 
            return state
    }
}

const initialState = []
export default favoritesReducer

