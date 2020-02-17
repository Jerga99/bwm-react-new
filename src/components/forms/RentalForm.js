

import React from 'react';

const RentalForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          type="text"
          className="form-control"
          id="title"/>
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <input 
          type="text"
          className="form-control"
          id="city"/>
      </div>

      <div className="form-group">
        <label htmlFor="street">Street</label>
        <input 
          type="text"
          className="form-control"
          id="street"/>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>

        <select className="form-control"
                id="category">
          <option> Something 1 </option>
          <option> Something 2 </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="bedrooms">Image Url</label>
        <input 
          type="text"
          className="form-control"
          id="image"/>
      </div>

      <div className="form-group">
        <label htmlFor="bedrooms">Rooms</label>
        <input 
          type="number"
          className="form-control"
          id="numOfRooms"/>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea 
          rows="5"
          type="text"
          className="form-control"
          id="description">
        </textarea>
      </div>

      <div className="form-group">
        <label htmlFor="dailyRate">Daily Price</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">$</div>
          </div>
          <input 
            type="number"
            className="form-control"
            id="dailyPrice"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input 
          type="text"
          className="form-control"
          id="phone"/>
      </div>

      <div className="form-group">
        <label htmlFor="shared">Shared</label>
        <input 
          type="checkbox"
          className="form-control"
          id="shared"/>
      </div>
      <button 
        type="submit"
        className="btn btn-bwm-main">Create
      </button>
    </form>
  )
}

export default RentalForm;