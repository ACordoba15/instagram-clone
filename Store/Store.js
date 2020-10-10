import { createStore, combineReducers } from "redux";

const reducerPrueba = (state = [], action) => {
  return state;
};

const reducers = combineReducers({
  reducerPrueba,
});

const Store = createStore(reducers);

export default Store;
