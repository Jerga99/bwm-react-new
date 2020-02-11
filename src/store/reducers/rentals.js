


// PURE FUNCTION
// Dont mutate arguments
// No API calls, no route transitions
// Math.random()

const rentals = (state = [], action) => {
  debugger
  if (action.type === 'FETCH_RENTALS') {
    return action.rentals;
  } else {
    return state;
  }
}

export default rentals;