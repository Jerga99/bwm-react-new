


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