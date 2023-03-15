var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/prods', require('./routes/prodRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/rating', require('./routes/ratingRoute'));
app.use('/cart', require('./routes/cartRoute'));
app.use('/cartRow', require('./routes/cartRowRoute'));

module.exports = app;
