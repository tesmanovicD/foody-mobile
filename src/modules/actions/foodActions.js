import api from '../../utils/api'

function getAllCategories() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            api.get('/foodCategory')
            .then(categories => {
                dispatch({ type: 'SET_FOOD_CATEGORIES', payload: {categories}})
                resolve()
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

function getAllItems() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            api.get('/foodItems')
            .then(items => {
                dispatch({ type: 'SET_FOOD_ITEMS', payload: {items} })
                resolve()
            })
            .catch(err => reject(err))
        })
    }
}

function getItemsFromCategory(id) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            api.get(`/foodItems/category/${id}`)
            .then(items => {
                dispatch({ type: 'SET_FOOD_ITEMS_FILTERED', payload: {items} })
                resolve()
            })
            .catch(err => reject(err))
        })
    }
}

export default {
    getAllCategories,
    getAllItems,
    getItemsFromCategory
}
