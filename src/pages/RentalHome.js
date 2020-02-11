

import React from 'react';
import RentalCard from '../components/rental/RentalCard';
import connect from '../store/connect';

class RentalHome extends React.Component {

  componentDidMount() {
    debugger
    this.props.dispatch({type: 'FETCH_RENTALS'})
    this.props.dispatch({type: 'FETCH_RENTALS'})
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    debugger
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Your Home All Around the World</h1>
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

export default connect(mapStateToProps)(RentalHome);