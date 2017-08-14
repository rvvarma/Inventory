var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Inventory_item = require('./api/item/item');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use('/',Inventory_item);



app.use(function(req, res, next){
var err = new Error ('Not Found');
err.status = 404;
next(err);
});


module.exports=app;
