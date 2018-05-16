'use strict';
const path = require('path');
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
  
  app.use(function(req,res){
    res.status(404);
    res.render('404', { title: 'File Not Found' });
  });
 
};

