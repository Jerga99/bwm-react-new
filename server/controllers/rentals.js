
const Rental = require('../models/rental');

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