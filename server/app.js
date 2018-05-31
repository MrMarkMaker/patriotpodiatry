'use strict';

const express = require( 'express' );
const app = express();

app.use(express.static(__dirname + './../public'));
require( './routes' )( app, express );
module.exports = app;

//add handlebars view engine
var handlebars = require('express3-handlebars')
.create({defaultLayout: 'main'});   //default handlebars layout page

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); //sets express view engine to handlebars

