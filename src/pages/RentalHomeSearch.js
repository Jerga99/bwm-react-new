

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from 'actions';
import { withRouter } from 'react-router-dom';
import { capitalize } from 'helpers/functions';

class RentalHomeSearch extends React.Component {

  componentDidMount() {
    this.getRentals(this.location);
  }

  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps.match.params;

    if (this.location !== prevLocation) {
      this.getRentals(this.location);
    }
  }

  getRentals(location) {
    this.props.dispatch(fetchRentals(location));
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );

  get location() {
    return this.props.match.params.location;
  }
  
  render() {
    const { rentals } = this.props;
    
    return (
      <div className="card-list">  
        <h1 className="page-title">Your Home in "{capitalize(this.location)}"</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(withRouter(RentalHomeSearch));