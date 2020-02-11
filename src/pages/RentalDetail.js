
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from '../actions';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  render() {
    const { rental } = this.props;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              {/* <!-- TODO: Display rental image --> */}
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              {/* <!-- TODO: Display rental map --> */}
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
                {/* <!-- TODO: Display shared category --> */}
                <h2 className={`rental-type type-${rental.category}`}>
                  {rental.shared ? 'Shared' : 'Whole'} {rental.category}
                </h2>
                {/* <!-- TODO: Display title --> */}
                <h1 className="rental-title">{rental.title}</h1>
                {/* <!-- TODO: Display city --> */}
                <h2 className="rental-city">{rental.city}</h2>
                <div className="rental-room-info">
                  {/* <!-- TODO: Display numOfRooms --> */}
                  <span><i className="fa fa-building"></i>{rental.numOfRooms} bedrooms</span>
                    {/* // <!-- TODO: Display numOfRooms + 4 --> */}
                  <span><i className="fa fa-user"></i> {rental.numOfRooms + 4} guests</span>
                  {/* // <!-- TODO: Display numOfRooms + 2 --> */}
                  <span><i className="fa fa-bed"></i> {rental.numOfRooms + 2} beds</span>
                </div>
                {/* <!-- TODO: Display description --> */}
                <p className="rental-description">
                  {rental.description}
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

const mapStateToProps = ({rental}) => ({ rental })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);