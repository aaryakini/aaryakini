var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patQ77K0c3ZXX3Z92.a19bff7e01ae196d87724182b7662a994d3262c6a77bbb1a364c5892b181b039'
});
var base = Airtable.base('appDm0yWy0q7Y0H40');

// //variable that stories all the data fromt the API

// let apiData;


// //this is where you 'call' your data

// //async means asynchronous, the function will always be executed separately, 
// //regardless of where it is placed in executable code
// //the getData function gets ALL the data from the Airtable API
// async function getData(url){
// 	let response = await fetch(url);
// 	let jsonData = await response.json();
// 	return jsonData;
// }

// //the await in this main function is paired with the async of the getData function
// //but await can only exist in async functions
// async function main(){
// 	apiData = await getData(apiUrl);

// 	console.log(apiData);

// 	let counter = 0;

// 	for (let i = 0; i < apiData.records.length; i++){
// 		let name = apiData.records[i].fields.name;
// 	}
	
//     // console.log(all);

// 	display();

//     //hiding the template class
// 	// let hide = document.getElementsByClassName("book")[0];
// 	// hide.classList.add("hide");
	
// }


// base('jovannaTestimonials').select({
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         let name = record.get('name'); 
//     });

//     display();

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });


// base('jovannaTestimonials').select({
//     view: 'Grid view'
// }).firstPage(function(err, records) {
//     if (err) { console.error(err); return; }
//     records.forEach(function(record) {
//         let template = document.getElementsByClassName("testimonial")[0];
// 		let container = document.getElementById("testimonialContainer");

// 		let templateCopy = template.cloneNode(true);
        
// 		container.appendChild(templateCopy);

// 		templateCopy.querySelector(".name").append(record.get('name'));
// 		templateCopy.querySelector(".relationship").append(record.get('relationship'));
// 		templateCopy.querySelector(".testText").append(record.get('testText'));
//     });
// });

let template = document.getElementsByClassName("testimonial")[0];
let container = document.getElementById("testimonialContainer");

base('jovannaTestimonials').select({
    view: 'Grid view'
}).firstPage(function(records) {
    records.forEach(function(record) {
        console.log('Retrieved', record.get('name'));
        let templateCopy = template.cloneNode(true);
        
		container.appendChild(templateCopy);

		templateCopy.querySelector(".name").append(record.get('name'));
		templateCopy.querySelector(".relationship").append(record.get('relationship'));
		templateCopy.querySelector(".testText").append(record.get('testText'));
    });
});

// main();

// function display(){
// 	for(let i = 0; i < apiData.length; i++){

// 		let template = document.getElementsByClassName("testimonial")[0];
// 		let container = document.getElementById("testimonialContainer");

// 		let templateCopy = template.cloneNode(true);
        
// 		container.appendChild(templateCopy);

// 		templateCopy.querySelector(".name").append(all[i].fields.name);
// 		templateCopy.querySelector(".relationship").append(all[i].fields.relationship);
// 		templateCopy.querySelector(".testText").append(all[i].fields.testText);
        
// 	}
// }