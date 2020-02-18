import axiosService from 'services/AxiosService';
import { extractApiErrors } from './index';
const { bwmAxios } = axiosService;

export const createBooking = booking => {
  return bwmAxios.post('/bookings', booking)
    .then(res => res.data)
    .catch(err => Promise.reject(extractApiErrors(err.response || {})))
}

export const getBookings = rentalId => {
  return bwmAxios.get(`/bookings?rental=${rentalId}`)
    .then(res => res.data)
}