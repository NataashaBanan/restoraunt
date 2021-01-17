var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    table_number: {type: Number, required: true},
    date_and_time: {type: Date, required: true},
    family_name: String,
    name: String,
    phone_number: {type: String, required: true}
})

BookingSchema.virtual('booking_time').get(function (){
    return this.date_and_time;
})

//Export model
module.exports = mongoose.model('Booking', BookingSchema)