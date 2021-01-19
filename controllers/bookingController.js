var Booking = require('../models/booking')

//handle get booking
exports.booking_detail = function(req, res) {
    Booking.find({family_name: req.body.family_name, name: req.body.name, phone_number: req.body.tel},
        function (err, result){
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
        });
}

//Handle booking create on POST
exports.booking_create_post = function (req, res) {
    //TODO: add validate
    var bookingDetails = {
        table_number: 1,
        date_and_time: req.body.date,
        family_name: req.body.family_name,
        name: req.body.name,
        phone_number: req.body.tel
    };
    var booking = new Booking(bookingDetails);
    booking.save()
    res.send("booking: " + booking + " was saved")
}

// Handle Booking delete on POST.
exports.booking_delete_post = function(req, res) {
    Booking.deleteOne({family_name: req.body.family_name, name: req.body.name, phone_number: req.body.tel},
        function (err, result){
        if (err){
            res.send(err)
        } else {
            res.send(result)
        }
    });
};