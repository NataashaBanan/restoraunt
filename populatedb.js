#! /user/bin/env node

var userArgs = process.argv.slice(2);

var async = require('async');
var Booking = require('./models/booking');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var bookings = []

function bookingCreate(table, time, family_name, name, phone_number, cb){
    var bookingDetails = {
        table_number: table,
        date_and_time: time,
        family_name: family_name,
        name: name,
        phone_number: phone_number
    };
    var booking = new Booking(bookingDetails);

    booking.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('booking: ' + booking);
        bookings.push(booking)
        cb(null, booking)
    });
}

async.series([
    function (callback){
    bookingCreate(1, Date.now(), "Barabanova", "Natasha", "+7-800-555-35-35", callback);
    },
    function (callback){
    bookingCreate(2, Date.now(), "Solodushkin", "Svytoslav", "+7-900-000-00-00", callback);
    }],
    function(err, results) {
        if (err) {
            console.log('FINAL ERR: '+err);
        }
        else {
            console.log('bookings: '+ bookings);

        }
        // All done, disconnect from database
        mongoose.connection.close();
});
