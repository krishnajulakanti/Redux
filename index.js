const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

// INITIAL STATE
const initialState = {
    numOfCakes: 10,
    numOfCandles: 5
}

// ACTION
function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}
// REDUCER ===> (prevState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        case CAKE_RESTOCKED: return {
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(()=> console.log("Updated State", store.getState()))

store.dispatch(orderCake(2))
store.dispatch(orderCake(3))
store.dispatch(orderCake(4))

store.dispatch(restockCake(15))


// const actions = bindActionCreators(
//     {orderCake, restockCake}, store.dispatch
// )

// actions.orderCake(2)
// actions.orderCake(3)
// actions.orderCake(4)
// actions.restockCake(15)

unsubscribe()
