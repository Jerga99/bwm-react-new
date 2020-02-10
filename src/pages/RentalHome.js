

import React from 'react';
import RentalCard from '../components/rental/RentalCard';
import { StateContext } from '../state-context';

class RentalHome extends React.Component {

  state = {
    rentals: []
  }

  componentDidMount() {
    debugger
    const store = this.context;
    this.setState({
      rentals: store.rentals()
    });
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.state;

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

RentalHome.contextType = StateContext;

export default RentalHome;