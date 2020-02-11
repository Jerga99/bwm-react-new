

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from 'actions';
import axios from 'axios';

class RentalHome extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/rentals')
      .then(res => {
        const rentals = res.data;
        this.props.dispatch(fetchRentals(rentals));
      })
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
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