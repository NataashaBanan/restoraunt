var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


var booking_controller = require('../controllers/bookingController')

//POST request for creating booking
router.post('/booking/create', booking_controller.booking_create_post);

//POST request for deleting booking
router.post('/booking/delete', booking_controller.booking_delete_post);

//POST request for one booking
router.post('/booking', booking_controller.booking_detail);

module.exports = router;
