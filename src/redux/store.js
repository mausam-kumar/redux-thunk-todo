import { createStore,applyMiddleware,combineReducers} from "redux";
import {reducerFetch} from './reducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = createStore(combineReducers({reducerFetch}),composeWithDevTools(applyMiddleware(thunk)))
