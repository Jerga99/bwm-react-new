
import React from 'react';
import { fetchUserRentals } from 'actions';
import { connect } from 'react-redux';
import RentalCard from 'components/rental/RentalCard';


class ManageRentals extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserRentals());
  }

  deleteRental = (rentalId) => {
    const canDelete = this.askForPermission();
    if (!canDelete) { return; }

    alert('Deleting!');
  }

  askForPermission() {
    return window.confirm('Are you sure you want to delete this rental?');
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard 
          rental={rental}
          renderMenu={() => 
            <>
              <button 
                onClick={() => this.deleteRental(rental._id)}
                className="btn btn-danger">Delete</button>
            </>
          }
        />
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