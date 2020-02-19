

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from 'actions';
import { withRouter } from 'react-router-dom';
import { capitalize } from 'helpers/functions';

class RentalHomeSearch extends React.Component {

  componentDidMount() {
    const { location } = this.props.match.params;
    this.props.dispatch(fetchRentals(location));
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;
    const { location } = this.props.match.params;

    return (
      <div className="card-list">  
        <h1 className="page-title">Your Home in "{capitalize(location)}"</h1>
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