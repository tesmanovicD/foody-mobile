const SET_FOOD_CATEGORIES = 'SET_FOOD_CATEGORIES'
const SET_FOOD_ITEMS = 'SET_FOOD_ITEMS'
const SET_FOOD_ITEMS_FILTERED = 'SET_FOOD_ITEMS_FILTERED'
const UPDATE_FOOD_QUANTITY = 'UPDATE_FOOD_QUANTITY'

const initialState = {
    categories: [],
    items: [],
    filteredItems: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_FOOD_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories
            }
        case SET_FOOD_ITEMS:
            return {
                ...state,
                items: action.payload.items
            }
        case SET_FOOD_ITEMS_FILTERED:
            return {
                ...state,
                filteredItems: action.payload.items
            }
        case UPDATE_FOOD_QUANTITY: 
        return {
            ...state,
            filteredItems: state.filteredItems.map(item => {
              if (item.id == action.payload.id) {
                return {
                    ...item,
                    quantity: item.quantity - action.payload.quantity
                } 
              }
              return item;
            })
        }
        default:
            return state
    }
}
