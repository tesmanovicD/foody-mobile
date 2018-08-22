import api from '../../utils/api'

function addItem(item) {
    return dispatch => {
        dispatch({ type: 'ADD_ITEM_TO_BASKET', payload: {item} })
        dispatch({ type: 'UPDATE_FOOD_QUANTITY', payload: {id: item.id, quantity: item.quantity}})
    }
}

export default {
    addItem
}