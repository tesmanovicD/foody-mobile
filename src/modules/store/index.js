import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from '../reducers/userReducer'
import food from '../reducers/foodReducer'
import basket from '../reducers/basketReducer'
import order from '../reducers/orderReducer'

const rootReducer = combineReducers({
    user,
    food,
    basket,
    order
})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store