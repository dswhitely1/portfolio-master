import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import {rootReducer} from "./reducers";

const isProduction = process.env.NODE_ENV === "production";

const store = isProduction ? createStore(rootReducer) : createStore(rootReducer, applyMiddleware(logger));

export default store;
