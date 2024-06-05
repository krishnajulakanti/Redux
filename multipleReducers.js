const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// INITIAL STATE
const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 10
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

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}
// REDUCER ===> (prevState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
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

const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        case ICECREAM_RESTOCKED: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams + action.payload
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(()=> console.log("Updated State", store.getState()))

store.dispatch(orderCake(2))
// store.dispatch(restockCake(15))

store.dispatch(orderIceCream(9))
// store.dispatch(restockIceCream(15))

unsubscribe()
