
import { rentalData } from './data';
import { createStore, combineReducers } from 'redux';

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals: (state = [], action) => {
      if (action.type === 'FETCH_RENTALS') {
        return rentalData;
      } else {
        return state;
      }
    },
    data1: (state = [], action) => {
      if (action.type === 'FETCH_DATA') {
        return ['1', '2', '3']
      } else {
        return state;
      }
    },
    data2: () => ['a', 'b', 'c']
  })
  
  const store = createStore(reducers);
  return store;
}