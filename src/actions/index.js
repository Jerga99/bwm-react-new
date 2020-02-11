
import { rentalData } from '../store/data';

export const fetchRentals = () => {
  debugger
  return {
    type: 'FETCH_RENTALS',
    rentals: rentalData
  }
}