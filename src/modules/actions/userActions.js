import api from '../../utils/api'

function authenticateUser(email, password) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            api.post('/customers/authenticate', { email, password })
            .then(userInfo => {
                dispatch({ type: 'LOGIN_SUCCESS', payload: {userInfo} })
                resolve()
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

export default {
    authenticateUser
}