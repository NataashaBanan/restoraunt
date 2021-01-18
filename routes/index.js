var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


var booking_controller = require('../controllers/bookingController')

//GET request for creating booking
router.get('/booking/create', booking_controller.booking_create_get);
//POST request for creating booking
router.post('/booking/create', booking_controller.booking_create_post);
//GET request for deleting booking
router.get('/booking/delete', booking_controller.booking_delete_get);
//POST request for deleting booking
router.get('/booking/delete', booking_controller.booking_delete_post);
//GET request for one booking
router.get('/booking/:id', booking_controller.booking_detail);

module.exports = router;
