const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
        return {...state, name: action.user.name} // what should this line be doing? 

        case 'CREATE_USER':
        return {...state, 
        name: action.user.name,
        isDiabetic: action.user.diabetic,
        carbsPerUnit: action.user.ratio
        }

        default:
        return state
    }
}

const initialState = {
    name: "",
    isDiabetic: null, 
    carbsPerUnit: null,
}

export default userReducer