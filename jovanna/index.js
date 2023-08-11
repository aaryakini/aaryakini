let template = document.getElementById("template");
let container = document.getElementById("testimonialContainer");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'patleqiDqDweshBzm.a528a3f186333d1008470fb5d024037c552dd4e6f1393ebba2a5e111106eaeec'}).base('appDm0yWy0q7Y0H40');

base('jovannaTestimonials').select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        let templateCopy = template.cloneNode(true);
        container.appendChild(templateCopy);

        templateCopy.querySelector(".name").append(record.get('name'));
		templateCopy.querySelector(".relationship").append(record.get('relationship'));
		templateCopy.querySelector(".testText").append(record.get('testimonial'));
        templateCopy.style.backgroundColor = pickColour();
        templateCopy.removeAttribute('id');

        // console.log('Retrieved', record.get('name'), ' ' , record.get('relationship'), ' ' , record.get('testimonial'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

let hide = document.getElementsByClassName("testimonial")[0];
hide.classList.add("hide");

function pickColour(){
    let a = randomNumber(0,5);
    let colours = ["#6EC7ED", "#A1E8CC", "#FFBF46", "#EB9FEF", "#F87666"];
    return colours[a];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}