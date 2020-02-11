
import axios from 'axios';

export const fetchRentals = () => dispatch => {
  axios.get('/api/v1/rentals')
    .then(res => {
      const rentals = res.data;
      dispatch({
        type: 'FETCH_RENTALS',
        rentals
      });
    })
}


export const fetchRentalById = rentalId => async dispatch => { 
  const res = await axios.get(`/api/v1/rentals/${rentalId}`)
  dispatch({
    type: 'FETCH_RENTAL_BY_ID',
    rental: res.data
  });
}

export const createRental = rental => {
  return {
    type: 'CREATE_RENTAL',
    rental
  }
}