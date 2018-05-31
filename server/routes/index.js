'use strict';
const path = require('path');
var nodemailer = require('nodemailer');
const crypto = require('crypto');
var request = require('request');

// const nameofController = require( '../controllers/nameofController' );

module.exports = function( app, express ) {
  
  app.get('/', function(req,res){
    res.render('home', { 
      title: 'Family-Friendly Podiatrists',
      keywords: 'family foot doctor, foot surgery, podiatrist for diabetic patients, podiatrist for arthritic patients, florida foot doctor, florida foot surgeon, florida podiatrist'
    });
  });
  
  app.get('/home', function(req,res){
    res.render('home', { 
      title: 'Family-Friendly Podiatrists',
      keywords: 'family foot doctor, foot surgery, podiatrist for diabetic patients, podiatrist for arthritic patients, florida foot doctor, florida foot surgeon, florida podiatrist'
    });
  });
  
  app.get('/doctors', function(req,res){
    res.render('doctors', { 
      title: 'Our Doctors',
      keywords: 'Stephanie Hilton Frey, Marcus Frey, Doctor Frey podiatrist, foot surgeon'
      });
  });
  
  app.get('/services', function(req,res){
    res.render('services', { 
      title: 'Our Services',
      keywords: 'family foot doctor, florida foot surgeon, podiatry services'
    });
  });
  
  app.get('/contact', function(req,res){
    res.render('contact', { 
      title: 'Contact Us',
      keywords: 'Dr. Frey, Doctor Marcus Frey, Doctor Stephanie Frey, Ocala Florida, Lady Lake Florida'
    });
  });
  
   app.get('/surgery', function(req,res){
    res.render('surgery', { 
      title: 'Surgery',
      keywords: 'Nail Avulsion, Nail Excision, Toenail Removal, Bunions, Hammertoe, Arthroscopy, Ligament Repair, Tendon Repair'
    });
  });
  
   app.get('/sprains_and_fractures', function(req,res){
    res.render('sprains_and_fractures', { 
      title: 'Sprains And Fractures',
      keywords: 'foot trauma, sprained ankle, broken foot, foot fracture'
    });
  });
  
   app.get('/diabetic_patient_care', function(req,res){
    res.render('diabetic_patient_care', { 
      title: 'Diabetic Patient Care',
      keywords: 'Diabetic, foot exam, shoe inserts, neuropathy'
    });
  });
  
  app.post('/sentmail',function(req,res){
    console.log("Sentmail is running");
   
    //Step one is to get the private key and the client email address in order to make authorized API calls. 
    //I am a garbage child and don't know what I'm doing. All I know is I need this thing to access the client email and private key info. So...I'm going to dump it right here.  And figure out how to do it right after I figure out how to do it at all. 
    
    var authdata = {  
      "client_email": "emailercredentials@patriotpodiatryemailer-204418.iam.gserviceaccount.com",
      "private_key_id": "f2d8dc2c4c215be425e885d93d5fd8488adc6555",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJfslJAzoft+9O\nPWNSPumlozQJW4M72HpFpugSj0y7/hNLzGDIXpKms3MmxiLEcLjcFXaVy7w46hgq\nf/jKpfvEQqBDZjmA/R6JFER+jGGqqr9CWpC9mqQCP4IeavujchiK/fVszt2QKv8e\nWsaxaDZKzCZiUpW/kA1EztZbAnDQXjt1rtAFPzKcvl+EFBzkyjQ19CVyEudIc231\niAQ7qf9nCLRLDlrIPNGpNOmo9ipbUCldQ4oZF4wH8gpmFm3KUF41gHaOiyTRhi/1\nuH+RvY2yba3VNnweooTiMvDa9sJq+exQ2VKWSLEm14i8rYkKQSvc9Qy7Lm3WexR8\nDIRonm+fAgMBAAECggEARqBhtm1ipLaIs3ByDWSO6iej+Dmy7Lmq1ho0UzkWaPic\nU9+99s2rcrIIxUkC678lFMOTLttcTMjFErSLhKCceITv/t/ofQ179Al+HqtfGn7C\nDmSHQmZfYYhYOAhAzuARuTpeGbcC02M2zDF+XrXL/fjD5YfUBHLeK8WiPgFDgM0/\ncogQ/dO9oI1A2qNLzXO5UGZjcicxJ670BjNAbGSuT6WOxUGu2yQx0Z7w/tnd4kEB\nDQfXQPUF38o5vJrWF2ABhOvWSvww09WrCEpb6/q2NTCDvTQTywuT3q1t4x2EseyZ\n72pH5zrXXxrB1294sjydXvPj6INHZMF0gx9uaervqQKBgQDvcPgvpm3oBKdoZ0sr\nG8J/vPtO/Cilr+6AB1A+bP1SEAtNfSiZqxZdC7Ro0/xz6ecWuPDB9LwvKd3ax1Rd\nFkx8emMwWh89IDRSmOrb51iI4XfNZ0/9jm9TWJ9HdnR1xOSevzJ7K4qPjcyui6VO\ncKmBwFAEUtaIrZivfgcZBt8mZwKBgQDXbga9/jMu1J2Mv1a6T+F3Upx8suaAtP9G\nMPUpg2Tcf6PTN7Ik4+bT8fYXJ0QdViLa6L00x0Km/AACUhiTaWL7ewI5ipPtFhBV\nG53BdieLikUhODFW0725FP5YRe4jiF/7bhw+Frk4mDXxL38O+qTp7yl+sCeejKTM\nGoA79B96CQKBgQDNoLzjXxBgAy8psBuTx+E/BjLkYBUgRXiTJrS5B6x9Px4Vy/iE\nD7PC8Hxc0kCp4yP8FZNdXioGbvQCINDIqI/DDvAD5EGTowaMMJrxgzo7QzY5hhHh\n9OKSNzeCja3yPccAtb5KnNf/9IzlETRDqulHbrrJG8L12e+YNqktywL03QKBgDsG\n/bfvP8z0GtsmzjesjYWpUBFm33uinFN6NKKUSv2Tx6qnFxu+ik/Ge3xqmOJE6LX8\nkWM1udCROdto7Szu8l0fnkNv8gpDQmRfdcE9g6ZbU4e/ot08lT5yPyKmvpJj2pDE\n4d4tUcDtC9KzBehvyuICUudQkvqBZOI73KkQwdMpAoGAUKUe5keeC2TXMHLwnifK\nASgJ+cH+CnrrzCxki+ls8Z+3WpmBQozhWL2Q7sGaXepwFGIMkqBm0ASnh4JGy9s5\np7a/5ThoKjmbTjL5/2TlYy9L2QF3dB3Sb29SXyTgnnQiR61XlW7yabxrToahE/Mj\n6au0L5HMaC3I/X1hWcO+dCM=\n-----END PRIVATE KEY-----\n",
      "type": "service_account",
      "project_id": "patriotpodiatryemailer-204418",
      "client_id": "101641886695801494410",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/emailercredentials%40patriotpodiatryemailer-204418.iam.gserviceaccount.com"
    }
    
    //Step 2 is to create a JWT.  
    //The JWT wants to know the client email, the scope which is a bunch of API permissions from google, and the expiration time and the issued time. The expiration time has to be within 1 hour of the issued time.  I'm going to give it 30 minutes.  I think I need way less than that, but, I'm just going to start with 30 minutes because I don't know what the hell I'm doing. 
    
    //HEADER
    var headerJSON = {
      "alg" : "RS256",
      "typ" : "JWT"
    };
    let headerString = JSON.stringify(headerJSON);
    var myBuffer = Buffer.from(headerString); 
    var headerUTF8 = myBuffer.toString();
    var headerBase64 = myBuffer.toString('base64');
    
    //CLAIMSET
    const currdate = new Date();
    const issued = currdate.getTime();
    const expires = issued + 60; 
    var claimsetJSON = {
      "iss"   : authdata.client_email,
      "scope" : "https://www.googleapis.com/auth/gmail.compose",
      "aud"   : "https://www.googleapis.com/oauth2/v4/token",
      "exp"   : expires,
      "iat"   : issued
    };
    let claimsetString = JSON.stringify(claimsetJSON);
    myBuffer = Buffer.from(claimsetString); 
    var claimsetUTF8 = myBuffer.toString();
    var claimsetBase64 = myBuffer.toString('base64');
   
    //I guess? ... I don't know. 
    
    //The instructions then say "Sign the UTF-8 representation of the input using SHA256withRSA with the private key obtained from the Google API Console.  The output will be a byte array."
    //The input is The byte array of the following content: {Base64url encoded header}.{Base64url encoded claim set}
    
    var input = headerBase64 + "." + claimsetBase64;      
    const sign = crypto.createSign( 'RSA-SHA256' );
    sign.write( input , 'utf8');
    sign.end(); 
    var signature = sign.sign( authdata.private_key );
    //The Sign object can not be again used after sign.sign() method has been called.  
    //The signature must then be Base64url encoded.  Right now, it is a buffer. 
    var signatureBase64 = signature.toString('base64');
    
    //So then we kinda just...Smush them together and we have a JWT ready for transmission, I think.
    var myJWT = input + "." + signatureBase64;  
    console.log( myJWT );
    
    //Step 3 is to request an access token from the Google OAuth 2.0 Authorization Server. With a POST request. 
    //Required is the grant_type (which should be "urn:ietf:params:oauth:grant-type:jwt-bearer" URL-encoded as necessary)
    //And the assertion (which is the JWT, including signature). 
    //We're using the http node module to do requests, it seems 
    
    //We need this to build our post string.
  
    var grant = "urn:ietf:params:oauth:grant-type:jwt-bearer";
    var grantEncoded = "urn%3aietf%3aparams%3aoauth%3agrant-type%3ajwt-bearer";
    
    function updateClient(){
      var clientServerOptions = {
        
        method        : 'POST',
        url           : 'https://www.googleapis.com/oauth2/v4/token', //HTTP/1.1 might go somewhere?
        json          : true,
        headers       : JSON.stringify({
                          'Content-Type' : 'application/x-www-form-urlencoded'
                        }),
        body          : JSON.stringify({ 
                          grant_type : 'urn%3aietf%3aparams%3aoauth%3agrant-type%3ajwt-bearer',
                          assertion  : myJWT
                        }),
        grant_type    : 'urn%3aietf%3aparams%3aoauth%3agrant-type%3ajwt-bearer',
        assertion     : myJWT,
        callback      : (err, res, body) => {
                         if (err) {
                            console.log("There is an error");
                            console.log(err)
                         }
                            console.log("No error");
                            console.log(body)
                        }
        //responseType : 'string',
      };
      request( clientServerOptions );
    };
    updateClient();
  });  
    
    /*
    var querystring = require('querystring');   
    var postData = querystring.stringify; 

    
    //Now we are going to build the post string... 
    
    function postCode(codestring){
      var post_data = querystring.stringify({
        'grant_type' : 'urn%3aietf%3aparams%3aoauth%3agrant-type%3ajwt-bearer',
        'assertion' : myJWT 
      });
      //  'output_format': 'json',
      //  'output_info': 'compiled_code',
      //  'warning_level' : 'QUIET',
      //  'js_code' : codestring
    };
    
    //Here's where we indicate where to post to, which I believe is  the Google OAuth 2.0 Authorization Server. 
    var post_options = {
      'host': 'https://www.googleapis.com/oauth2/v4/token',
      'method' : 'POST',
      'grant_type' : grantEncoded,
      'assertion' : myJWT
    };
    
    var post_req = http.request( post_options , function (res) {
      res.setEncoding(utf8);
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
    });
    
    //Now we post it... 
    post_req.write(post_data);
    post_req(end);
  }); */
    
    //Step 4 is to handle the JSON response that the Authorization Server returns.


    /*  var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'patriotpodiatryemail@address.com',
          pass: 'aventuraflorida'
        }
      });
      
      const mailOptions = {
        from: 'patriotpodiatryemailer@gmail.com', // sender address
        to: 'marissafromtexas@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<p>Your html here</p>'// plain text body
      };
        
      transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         console.log(err)
       else
         console.log(info);
      })
      .then( function( data ){
        res.send( "It worked..." + data ); 
        });      
    }; */
  
    app.use(function(req,res){
      res.status(404);
      res.render('404', { title: 'File Not Found' });
    });
  
};

