

import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize, formatDate } from 'helpers/functions';

const BookingListing = ({bookings, type, title = "Bookings"}) => {

  return (
    <section className="booking-listing">
      <h1 className="page-title">{title}</h1>
      <div className="row">
        { bookings.map(booking =>
          <div key={booking._id} className="col-md-4">
            <div className="card text-center">
              { type === 'received' &&
                <div className="card-header">
                  From: {booking.user.username}
                </div>
              }
              <div className="card-block">
                <h4 className="card-title">{booking.rental.title} - {capitalize(booking.rental.city)} </h4>
                <p className="card-text booking-days">
                  {formatDate(booking.startAt)} - {formatDate(booking.endAt)} | {booking.nights} nights
                </p>
                <p className="card-text"><span>Price: </span> <span className="booking-price-value">${booking.price}</span></p>
                <Link 
                  to={{pathname: `/rentals/${booking.rental._id}`}} 
                  className="btn btn-bwm-main">Go to Rental</Link>
                <button
                  className="ml-1 btn btn-danger">Delete
                </button>
              </div>
              <div className="card-footer text-muted">
                Created at {formatDate(booking.createdAt)}
              </div>
            </div>
          </div>
          )
        }
      </div>
    </section>
  )
}

export default BookingListing;