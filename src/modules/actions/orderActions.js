import api from '../../utils/api'

function getAllOrders() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            api.get('/orderPayments')
            .then(orders => {
                dispatch({ type: 'SET_ORDERS', payload: {orders} })
                dispatch(getAllOrderItems())
                .then(() => resolve())
                .catch(err => reject(err))
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

function getAllOrderItems() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            api.get('/orderItems')
            .then(orderItems => {
                dispatch({ type: 'SET_ORDER_ITEMS', payload: {orderItems} })
                resolve()
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

function cancelOrder(id) {
    const status = 'Canceled'
    return dispatch => {
        return new Promise((resolve, reject) => {
            api.put('/orderPayments/changeStatus', {id, status})
            .then(() => {
                dispatch({ type: 'CHANGE_ORDER_STATUS', payload: {id, status} })
                resolve()
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

export default {
    getAllOrders,
    cancelOrder
}