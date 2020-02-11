

const rental = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_RENTAL_BY_ID':
      return action.rental;
    default:
      return state;
  }
}

export default rental;