
import axios from 'axios';

export const fetchRentals = (rentals) => {
  return axios.get('http://localhost:3000/api/v1/rentals')
    .then(res => {
      const rentals = res.data;
      return {
        type: 'FETCH_RENTALS',
        rentals
      }
    })
}

export const fetchRentalById = (rentalId) => { 
  // const rental = rentalData.find((rental) => rental._id === rentalId);

  return {
    type: 'FETCH_RENTAL_BY_ID',
    rental: {}
  }
}

export const createRental = rental => {
  return {
    type: 'CREATE_RENTAL',
    rental
  }
}