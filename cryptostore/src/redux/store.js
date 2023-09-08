import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
