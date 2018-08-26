const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET'
const DELETE_ITEM_FROM_BASKET = 'DELETE_ITEM_FROM_BASKET'
const CLEAR_BASKET = 'CLEAR_BASKET'

const initialState = {
    products: [],
    totalSum: 0,
    totalProducts: 0
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
                totalSum: state.totalSum - (action.payload.item.price * action.payload.item.quantity)
            }
        case CLEAR_BASKET:
            return {
                products: [],
                totalSum: 0,
                totalProducts: 0
            }
        default:
            return state
    }
}