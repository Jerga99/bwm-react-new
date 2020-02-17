
const express = require('express');
const router = express.Router();
const { onlyAuthUser } = require('../controllers/users');
const { 
  getRentals,
  getRentalById,
  createRental } = require('../controllers/rentals');

router.get('', getRentals);
router.get('/:rentalId', getRentalById);
router.post('', onlyAuthUser, createRental);

module.exports = router;

// noSQL - no tables, we are keeping data in JSON format