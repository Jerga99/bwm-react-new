
import axiosService from 'services/AxiosService';
const { bwmAxios } = axiosService;

export const fetchRentals = () => dispatch => {
  bwmAxios.get('/rentals')
    .then(res => {
      const rentals = res.data;
      dispatch({
        type: 'FETCH_RENTALS',
        rentals
      });
    })
}

export const fetchRentalById = rentalId => async dispatch => { 
  dispatch({type: 'IS_FETCHING_RENTAL'});
  const res = await bwmAxios.get(`/rentals/${rentalId}`)
  dispatch({
    type: 'FETCH_RENTAL_BY_ID',
    rental: res.data
  });
}

export const createRental = rental => {
  return bwmAxios.post('/rentals', rental);
}