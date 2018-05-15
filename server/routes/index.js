'use strict';
const path = require('path');
// const nameofController = require( '../controllers/nameofController' );

module.exports = function( app, express ) {
  //all routes that start with /app will be redirected to app folder as public
  app.use("/app", express.static(path.join(__dirname, '../app')));
  
  app.get("/", function (req,res) {
    res.send("Server reportin' in.")
  });
 
};
