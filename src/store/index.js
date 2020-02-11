
import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals,
    data1: () => ['1', '2', '3', '4'],
    data2: () => ['a', 'b', 'c']
  })
  
  const store = createStore(reducers);
  return store;
}