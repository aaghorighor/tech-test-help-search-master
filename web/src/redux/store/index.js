import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import helpReducer from "../reducers/index";
import thunk from 'redux-thunk';

function configureStore(initialState = {}) {
  const store = createStore(combineReducers({helpsearch : helpReducer}), initialState, compose(
    applyMiddleware(thunk)
  ));
  return store;
}

const store = configureStore()
export default store;