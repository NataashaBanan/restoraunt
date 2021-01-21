var Booking = require('../models/booking')

const { body,validationResult } = require("express-validator");

//handle get booking
exports.booking_detail = [
    body('family_name').trim().isLength({min: 1}).escape().withMessage('Заполните фамилию'),
    body('name').trim().isLength({min: 1}).escape().withMessage('Заполните имя'),
    body('tel').trim().isMobilePhone('ru-RU').escape().withMessage('Неверный номер телефона'),

    (req, res, next) => {
    const errors = validationResult(req);

    Booking.findOne({family_name: req.body.family_name, name: req.body.name, phone_number: req.body.tel},
        function (err, result){
        if(err){
            res.render('check_error');
        }else if(!errors.isEmpty()){
            res.render('check_error', {errors: errors.array()})
        } else {
            res.render('check', {booking: Booking(result)});
        }
    })
}
]


//Handle booking create on POST
exports.booking_create_post = [

    body('family_name').trim().isLength({min: 1}).escape().withMessage('Заполните фамилию'),
    body('name').trim().isLength({min: 1}).escape().withMessage('Заполните имя'),
    body('tel').trim().isMobilePhone('ru-RU').escape().withMessage('Неверный номер телефона'),
    body('date', 'Заполните дату').optional({ checkFalsy: true }).isISO8601().toDate(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.render('created_error', {errors: errors.array()})
            //TODO: add details
        }
        var bookingDetails = {
            table_number: 1,
            date_and_time: req.body.date,
            family_name: req.body.family_name,
            name: req.body.name,
            phone_number: req.body.tel
        };
        var booking = new Booking(bookingDetails);
        booking.save();
        res.render('created', {booking: booking});}
]

// Handle Booking delete on POST.
exports.booking_delete_post = [

    body('family_name').trim().isLength({min: 1}).escape().withMessage('Заполните фамилию'),
    body('name').trim().isLength({min: 1}).escape().withMessage('Заполните имя'),
    body('tel').trim().isMobilePhone('ru-RU').escape().withMessage('Неверный номер телефона'),

    (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.render('deleted_error', {errors: errors.array()})
    }

    Booking.findOneAndDelete({family_name: req.body.family_name, name: req.body.name, phone_number: req.body.tel},
        function (err, result){
        if (err){
            res.render('deleted_error')
        } else {
            res.render('deleted', {booking: Booking(result)})
        }
    });
}];