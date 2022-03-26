import * as actionTypes from '../actionTypes/actionTypes'

export const registerUser = (userData) => {
    return{
        type: actionTypes.REGISTER_USER,
        payload: userData
    }
}

export const addProduct = (productData) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: productData
    }
}

export const deleteProduct =(id) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: id
    }
}

export const updateProduct = (id, productData) => {
    return {
        type: actionTypes.UPDATE_PRODUCT,
        payload: {
            id: id,
            productData: productData
        } 
    }
}