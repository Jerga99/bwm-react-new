
const Rental = require('../models/rental');
const Booking = require('../models/booking');

exports.getRentals = async (req, res) => {
  const { city } = req.query;

  const query = city ? {city: city.toLowerCase()} : {};

  try {
    const rentals = await Rental.find(query);
    return res.json(rentals);
  } catch(error) {
    return res.mongoError(error);
  }
}

'GET: /api/v1/rentals/me'
exports.getUserRentals = async (req, res) => {
  const { user } = res.locals;

  try {
    const rentals = await Rental.find({owner: user});
    return res.json(rentals);
  } catch(error) {
    return res.mongoError(error);
  }
}

exports.getRentalById = async (req, res) => {
  const { rentalId } = req.params;

  try {
    const rental = await Rental.findById(rentalId).populate('owner', '-password -_id');
    return res.json(rental);
  } catch(error) {
    return res.mongoError(error);
  }
}

exports.createRental = (req, res) => {
  const rentalData = req.body;
  rentalData.owner = res.locals.user;

  Rental.create(rentalData, (error, createdRental) => {
    if (error) { return res.mongoError(error); }

    return res.json(createdRental);
  })
}

exports.deleteRental = async (req, res) => {
  const { rentalId } = req.params;
  const { user } = res.locals;

  try {
    const rental = await Rental.findById(rentalId).populate('owner');
    const bookings = await Booking.find({rental});

    if (user.id !== rental.owner.id) {
      return res.sendApiError(
        { title: 'Invalid User', 
          detail: 'You are not owner of this rental!'});
    }

    if (bookings && bookings.length > 0) {
      return res.sendApiError(
        { title: 'Active Bookings', 
          detail: 'Cannot delete rental with active booking!'});
    }

    await rental.remove();
    return res.json({id: rentalId});
  } catch(error) {
    return res.mongoError(error);
  }
}

// middlewares

exports.isUserRentalOwner = (req, res, next) => {
  const { rental } = req.body;
  const user = res.locals.user;

  if (!rental) {
    return res
      .sendApiError(
        { title: 'Booking Error', 
          detail: 'Cannot create booking to undefined rental'});
  }

  Rental
    .findById(rental)
    .populate('owner')
    .exec((error, foundRental) => {
      if (error) { return res.mongoError(error); }

      if (foundRental.owner.id === user.id) {
        return res
          .sendApiError(
            { title: 'Invalid User', 
              detail: 'Cannot create booking on your rental'});
      }

      next();
    })
}