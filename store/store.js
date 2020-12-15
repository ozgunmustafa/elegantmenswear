import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {combineReducers} from 'redux'
import {productReducer} from "./reducers/productReducer"
import {reducer} from "./reducers"

// const combinedReducers =  combineReducers({
//     homeProducts:productReducer
// })

const middleware=[thunk];
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;