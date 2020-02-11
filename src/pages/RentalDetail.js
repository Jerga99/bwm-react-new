
import React from 'react';

class RentalDetail extends React.Component {

  render() {
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              {/* <!-- TODO: Display rental image --> */}
              <img src="#" alt="" />
            </div>
            <div className="col-md-6">
              {/* <!-- TODO: Display rental image --> */}
              <img src="#" alt="" />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
                {/* <!-- TODO: Display shared category --> */}
                <h2 className="rental-type">true house</h2>
                {/* <!-- TODO: Display title --> */}
                <h1 className="rental-title">Some Title</h1>
                {/* <!-- TODO: Display city --> */}
                <h2 className="rental-city">New York</h2>
                <div className="rental-room-info">
                  {/* <!-- TODO: Display numOfRooms --> */}
                  <span><i className="fa fa-building"></i>4 bedrooms</span>
                    {/* // <!-- TODO: Display numOfRooms + 4 --> */}
                  <span><i className="fa fa-user"></i> 8 guests</span>
                  {/* // <!-- TODO: Display numOfRooms + 2 --> */}
                  <span><i className="fa fa-bed"></i> 6 beds</span>
                </div>
                {/* <!-- TODO: Display description --> */}
                <p className="rental-description">
                  Some Description
                </p>
                <hr/>
                <div className="rental-assets">
                  <h3 className="title">Assets</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <span><i className="fa fa-asterisk"></i> Cooling</span>
                      <span><i className="fa fa-thermometer"></i> Heating</span>
                      <span><i className="fa fa-location-arrow"></i> Iron</span>
                    </div>
                    <div className="col-md-6">
                      <span><i className="fa fa-desktop"></i> Working area</span>
                      <span><i className="fa fa-cube"></i> Washing machine</span>
                      <span><i className="fa fa-cube"></i> Dishwasher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section> 
    )
  }
}

export default RentalDetail;