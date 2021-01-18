var Booking = require('../models/booking')

//display detail of booking
exports.booking_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: booking detail: ' + req.params.id)
}

// Display Booking create form on GET.
exports.booking_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Booking create GET');
};

//Handle booking create on POST
exports.booking_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: booking create POST')
}

// Display Booking delete form on GET.
exports.booking_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Booking delete GET');
};

// Handle Booking delete on POST.
exports.booking_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};