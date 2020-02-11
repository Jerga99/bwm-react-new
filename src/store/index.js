
import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals
  })
  
  const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, reduxExtension);
  return store;
}