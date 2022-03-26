import * as types from '../actionTypes/actionTypes'

const initState = {
    users: [],
}

const productState = {
    products: [],
        // {
        //     id: 1,
        //     productImg: "../Images/women-clothing1.jpg",
        //     productName: "Women Stripped Jumpsuit",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$110.00",
        // },
        // {
        //     id: 2,
        //     productImg: "../Images/women-clothing2.jpg",
        //     productName: "Women Printed T-Shirt",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$120.00",
        // },
        // {
        //     id: 3,
        //     productImg: "../Images/men-clothing2.jpeg",
        //     productName: "Men Printed Shirt",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$180.00",
        // },
        // {
        //     id: 4,
        //     productImg: "../Images/women-clothing4.jpeg",
        //     productName: "Floral Print Shrug",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$180.00",
        // },
        // {
        //     id: 5,
        //     productImg: "../Images/men-clothing11.jpeg",
        //     productName: "Men Plain T-Shirt",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$70.00",
        // },
        // {
        //     id: 6,
        //     productImg: "../Images/men-shoes4.jpg",
        //     productName: "Men Shoes",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$190.00",
        // },
        // {
        //     id: 7,
        //     productImg: "../Images/women-clothing7.jpeg",
        //     productName: "Animal Print Crop Top",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$100.00",
        // },
        // {
        //     id: 8,
        //     productImg: "../Images/men-clothing5.jpeg",
        //     productName: "Hoodie",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$150.00",
        // },
        // {
        //     id: 9,
        //     productImg: "../Images/women-clothing8.jpeg",
        //     productName: "Women Hoodie",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$110.00",
        // },
        // {
        //     id: 10,
        //     productImg: "../Images/men-clothing9.jpeg",
        //     productName: "Men Printed Shirt",
        //     description: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
        //     price: "$180.00",
        // },
    
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case types.REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return{
                 ...state
            }
    }
}

export const productReducer = (state = productState, action) => {
    switch(action.type) {
        case types.ADD_PRODUCT:
            return{
                ...state,
                products: [ ...state.products, action.payload]
            }
        case types.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((data) => data.id !== action.payload)
            }
        // case types.UPDATE_PRODUCT:
        //     return {
        //         ...state,
        //         products: state.products.find((data) => data.id === action.payload.id ? { ...action.payload.productData} 
        //         : [ ...state.products, action.payload.productData] ) 
        //     }
        default:
            return {
                ...state
            }
    }
}

