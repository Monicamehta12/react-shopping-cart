import * as types from '../actionTypes/actionTypes'

const initState = {
    users: [],
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case types.REGISTER_USER:
            return {
                ...state,
                users: [ {...state.users} , action.payload ]
            }
        default :
            return state
    }
}

export default userReducer