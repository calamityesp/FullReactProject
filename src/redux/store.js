import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; //store all middleware into an array
const store = createStore(rootReducer, applyMiddleware(...middlewares)); //spread all middleware into the applyMiddleware function provided by redux

export default store;
