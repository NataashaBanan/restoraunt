var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('other', {input: "Контакты"})
})

module.exports = router;