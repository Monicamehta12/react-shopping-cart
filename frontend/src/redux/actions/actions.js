import * as actionTypes from '../actionTypes/actionTypes'

export const registerUser = (userData) => {
    return{
        type: actionTypes.REGISTER_USER,
        payload: userData
    }
}