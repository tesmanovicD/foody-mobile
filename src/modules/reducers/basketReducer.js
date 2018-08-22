const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET'

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
        default:
            return state
    }
}