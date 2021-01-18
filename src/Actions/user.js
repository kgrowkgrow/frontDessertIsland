export const loginUser = (user = {}) => {
    return {
        type: 'LOGIN_USER',
        user
    }
}

export const createUser = (user = {}) => {
    return {
        type: 'CREATE_USER',
        user
    }
}
