// index.js

console.log('index.js in app')
const app = require( './app' );

/* Start the server */
console.log('starting the server.');
const http = require( 'http' ).Server( app ); 

/* Set the port, default 3000 */ 
console.log('Setting the port.');
app.set( 'port', process.env.PORT || 3000 );

var server = http.listen( app.get( 'port' ), () => {
  console.log( 'Express server listening on ' + server.address().port );
});

