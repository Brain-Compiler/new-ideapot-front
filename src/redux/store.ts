import { createStore, combineReducers } from "redux";

import { modalUpdateReducer } from "./modal/reducer";

const reducer = combineReducers({ modalUpdateReducer });

export const store = createStore(reducer);
