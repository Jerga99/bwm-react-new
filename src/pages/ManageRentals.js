
import React from 'react';
import { fetchUserRentals } from 'actions';
import { connect } from 'react-redux';
import RentalCard from 'components/rental/RentalCard';


class ManageRentals extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserRentals());
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
        <h1 className="page-title">My Rentals</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({manage}) => {
  return {
    rentals: manage.rentals.items,
    isFetching: manage.rentals.isFetching
  }
}

export default connect(mapStateToProps)(ManageRentals);