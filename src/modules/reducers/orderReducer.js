const SET_ORDERS = 'SET_ORDERS'
const SET_ORDER_ITEMS = 'SET_ORDER_ITEMS'
const CHANGE_ORDER_STATUS = 'CHANGE_ORDER_STATUS'

const initialState = {
    orders: [],
    orderItems: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload.orders
            }
        case SET_ORDER_ITEMS:
            return {
                ...state,
                orderItems: action.payload.orderItems
            }
        case CHANGE_ORDER_STATUS:
            return {
                ...state,
                orders: state.orders.map(order => {
                    if (order.id === action.payload.id) {
                        return {
                            ...order,
                            status: action.payload.status
                        }
                    }
                    return order
                })
            }
        default:
            return state
    }
}