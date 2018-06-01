const HandlebarsGenerator = require('handlebars-generator')

console.log('building...')

HandlebarsGenerator.registerSourceDirectory(__dirname + '/views', {
	extension: 'handlebars',
});

HandlebarsGenerator.registerPage('index', 'home', { 
      title: 'Family-Friendly Podiatrists',
      keywords: 'family foot doctor, foot surgery, podiatrist for diabetic patients, podiatrist for arthritic patients, florida foot doctor, florida foot surgeon, florida podiatrist'
    })

HandlebarsGenerator.registerPage('home','home', { 
  title: 'Family-Friendly Podiatrists',
  keywords: 'family foot doctor, foot surgery, podiatrist for diabetic patients, podiatrist for arthritic patients, florida foot doctor, florida foot surgeon, florida podiatrist'
})

HandlebarsGenerator.registerPage('doctors', 'doctors', { 
    title: 'Our Doctors',
    keywords: 'Stephanie Hilton Frey, Marcus Frey, Doctor Frey podiatrist, foot surgeon'
})

HandlebarsGenerator.registerPage('services', 'services', { 
    title: 'Our Services',
    keywords: 'family foot doctor, florida foot surgeon, podiatry services'
})

HandlebarsGenerator.registerPage('contact', 'contact', { 
    title: 'Contact Us',
    keywords: 'Dr. Frey, Doctor Marcus Frey, Doctor Stephanie Frey, Ocala Florida, Lady Lake Florida'
})

 HandlebarsGenerator.registerPage('surgery', 'surgery', { 
    title: 'Surgery',
    keywords: 'Nail Avulsion, Nail Excision, Toenail Removal, Bunions, Hammertoe, Arthroscopy, Ligament Repair, Tendon Repair'
})

 HandlebarsGenerator.registerPage('sprains_and_fractures', 'sprains_and_fractures', { 
    title: 'Sprains And Fractures',
    keywords: 'foot trauma, sprained ankle, broken foot, foot fracture'
})

 HandlebarsGenerator.registerPage('diabetic_patient_care', 'diabetic_patient_care', { 
    title: 'Diabetic Patient Care',
    keywords: 'Diabetic, foot exam, shoe inserts, neuropathy'
})

HandlebarsGenerator.generatePages(__dirname + '/public', {
	extension: 'html',
}, function(err) {
	if(err) {
		console.error(err.message)
	}
})

console.log('built')
