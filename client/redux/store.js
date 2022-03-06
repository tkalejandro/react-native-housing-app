import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"

import houseReducer from "./reducers/houseReducers"


const rootReducer = combineReducers({
    house: houseReducer
})

const middleware = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer, middleware)