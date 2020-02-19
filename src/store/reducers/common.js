
import { combineReducers } from "redux";

export const itemsReducer = resource => {
  return (state = [], action) => {
    if (resource !== action.resource) {
      return state;
    }

    switch(action.type) {
      case 'REQUEST_DATA':
        return [];
      case 'REQUEST_DATA_COMPLETE':
        return action.data;
      default:
        return state
    }
  }
}

export const isFetchingReducer = (resource) => {
  return (state = false, action) => {
    if (resource !== action.resource) {
      return state;
    }
    switch(action.type) {
      case 'REQUEST_DATA':
        return true;
      case 'REQUEST_DATA_COMPLETE':
        return false;
      default:
        return state
    }
  }
}

export const createList = resource => {
  const items = itemsReducer(resource);
  const isFetching = isFetchingReducer(resource);

  return combineReducers({
    items,
    isFetching
  })
}