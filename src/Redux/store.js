import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";
import blogReducer from './Blogs/reducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({ blogReducer });

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSTION_COMPOSE_ || compose;


export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
); 