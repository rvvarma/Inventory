var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var salesinvoice = require('./api/sales-invoice/invoice');
var customerpayment = require ('./api/customer-payment/payment');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use('/',salesinvoice);
app.use('/customerpayment',customerpayment);


app.use(function(req, res, next){
var err = new Error ('Not Found');
err.status = 404;
next(err);
});


module.exports=app;