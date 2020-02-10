

import React from 'react';

class RentalHome extends React.Component {


  render() {
    return (
      <div className="card-list">
        <div className="container">
          <h1 className="page-title">Your Home All Around the World</h1>
          <div className="row">
            <div className="col-md-3">
              <div className="card bwm-card">
                <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="Card image cap" />
                <div className="card-body">
                  <h6 className="card-subtitle mb-0 text-muted">Whole Apartment &#183; Bratislava</h6>
                  <h5 className="card-title big-font">Awesome Place</h5>
                  <p className="card-text">$23 per Night &#183; Free Cancelation</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bwm-card">
                <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="Card image cap" />
                <div className="card-body">
                  <h6 className="card-subtitle mb-0 text-muted">Whole Apartment &#183; Bratislava</h6>
                  <h5 className="card-title big-font">Awesome Place</h5>
                  <p className="card-text">$23 per Night &#183; Free Cancelation</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bwm-card">
                <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="Card image cap" />
                <div className="card-body">
                  <h6 className="card-subtitle mb-0 text-muted">Shared Apartment &#183; Barcelona</h6>
                  <h5 className="card-title big-font">Sunny Place</h5>
                  <p className="card-text">$93 per Night &#183; Free Cancelation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RentalHome;