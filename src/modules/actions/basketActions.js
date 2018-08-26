import api from '../../utils/api'

function addItem(item) {
    return dispatch => {
        dispatch({ type: 'ADD_ITEM_TO_BASKET', payload: {item} })
        dispatch({ type: 'UPDATE_FOOD_QUANTITY', payload: {id: item.id, quantity: item.quantity}})
    }
}

function deleteItem(item) {
    return dispatch => {
		dispatch({ type: 'DELETE_ITEM_FROM_BASKET', payload: {item} })        
    }
}

function clearBasket() {
    return dispatch => {
        dispatch({ type: 'CLEAR_BASKET' })
    }
}

function addOrder(items, idCustomer, totalSum) {
    const orderNo = (Date.now() + "").slice(-8)

    return dispatch => {
        return new Promise((resolve, reject) => {
            api.post('/orderPayments/add', {idCustomer, orderNo})
            .then((res) => {
                api.post('/orderItems/add', {items, lastId: res.lastId})
                .then(() => {
                    api.put('/orderPayments/edit', {id: res.lastId, price: totalSum})
                    .then(() => {
                        dispatch(clearBasket())
                        resolve(orderNo)
                    })
                    .catch(err => reject(err))
                })
                .catch((err) => reject(err))
            })
            .catch((err) => reject(err))
        })
    }
    
}

export default {
    addItem,
    deleteItem,
    clearBasket,
    addOrder
}