const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
        return {...state, user: {
            name: action.user.name,
            diabetic: action.user.diabetic,
            carb_ratio: action.user.carb_ratio
        }} // what should this line be doing? 

        case 'CREATE_USER':
        return {...state, user: {
            name: action.user.name,
            diabetic: action.user.diabetic,
            carb_ratio: action.user.carb_ratio
        }}

        case 'EDIT_USER':
        return {...state, user: {
            name: action.user.name,
            diabetic: action.user.diabetic,
            carb_ratio: action.user.carb_ratio
        }}

        case 'LOGOUT_USER':
            return {...state, user: {initialState}}

        default:
        return state
    }
}

const initialState = {
    user: {
        name: "",
        diabetic: null,
        carb_ratio: null
    }
}

export default userReducer

// what's in the store right now? probably should have:
// user, recipes, favorites(eventually), and comments(maybe not)
// but right now just the user ok?