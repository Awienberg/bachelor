var express = require('express');
var router = express.Router();
const sizeController = require("../controllers/sizeController");
const serviceController = require("../controllers/serviceController");
const bookController = require("../controllers/bookController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Booking system',
      subtitle: 'Anden del af bachelor projekt'
  });
});

// get str and services
router.get('/booking', serviceController.service);

// register bookings
router.post('/register', function(req, res, next) {
  bookController.upsertBook(req);
  return res.redirect('/bookings');
});

// get bookings
router.get('/bookings', bookController.bookings);

module.exports = router;
