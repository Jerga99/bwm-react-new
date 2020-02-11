
import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals
  })
  
  const store = createStore(reducers);
  return store;
}