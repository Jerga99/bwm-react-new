
import React from 'react';


class BookingReserve extends React.Component {

  render() {
    return (
      <div className='booking'>
        <h3 className='booking-price'>$ 12 <span className='booking-per-night'>per night</span></h3>
        <hr></hr>
        <div className='form-group'>
        <label htmlFor='dates'>Dates</label>
        <input 
          placeholder="2020/12/12"
          type='text'
          className='form-control'>
        </input>
        </div>
        <div className='form-group'>
          <label htmlFor='guests'>Guests</label>
          <input 
            value="1"
            type='number'
            className='form-control'
            id='guests'
            aria-describedby='guests'>
          </input>
        </div>
        <button className='btn btn-bwm-main btn-block'>Reserve place now</button>
        <hr></hr>
        <p className='booking-note-title'>People are interested into this house</p>
        <p className='booking-note-text'>
          More than 500 people checked this rental in last month.
        </p>
      </div>
    )
  }
}

export default BookingReserve;