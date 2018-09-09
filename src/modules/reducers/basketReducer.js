const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET'
const DELETE_ITEM_FROM_BASKET = 'DELETE_ITEM_FROM_BASKET'
const CLEAR_BASKET = 'CLEAR_BASKET'
const ACTIVATE_DISCOUNT_FIXED = 'ACTIVATE_DISCOUNT_FIXED'
const ACTIVATE_DISCOUNT_PERCENTAGE = 'ACTIVATE_DISCOUNT_PERCENTAGE'

const initialState = {
    products: [],
    totalSum: 0,
    totalProducts: 0,
    usedCoupon: false,
    discountSize: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_BASKET:
            return {
                ...state,
                products: [...state.products, action.payload.item],
                totalProducts: state.totalProducts + 1,
                totalSum: state.totalSum + (action.payload.item.price * action.payload.item.quantity)
            }
        case DELETE_ITEM_FROM_BASKET:
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.payload.item.id),
                totalProducts: state.totalProducts - 1,
                totalSum: state.totalSum - (action.payload.item.price * action.payload.item.quantity) + state.discountSize,
                discountSize: state.products.length == 1 ? 0 : state.discountSize,
                usedCoupon: state.products.length == 1 ? false : true
            }
        case CLEAR_BASKET:
            return {
                products: [],
                totalSum: 0,
                totalProducts: 0,
                usedCoupon: false,
                discountSize: 0
            }
        case ACTIVATE_DISCOUNT_FIXED:
            return {
                ...state,
                totalSum: state.totalSum - action.payload.discount,
                discountSize: action.payload.discount,
                usedCoupon: true
            }
        case ACTIVATE_DISCOUNT_PERCENTAGE:
            return {
                ...state,
                totalSum: state.totalSum-(Number(state.totalSum) * Number(action.payload.discount) / 100),
                discountSize: Number(state.totalSum) * Number(action.payload.discount) / 100,
                usedCoupon: true
            }
        default:
            return state
    }
}