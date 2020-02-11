

export const fetchRentals = (rentals) => { 
  
  return {
    type: 'FETCH_RENTALS',
    rentals
  }
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