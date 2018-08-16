const LOGIN_SUCCES = 'LOGIN_SUCCESS'

const initialState = {
    loggedIn: false,
    userInfo: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCES:
            return {
                loggedIn: true,
                userInfo: action.payload.userInfo
            }
        default:
            return state
    }
}