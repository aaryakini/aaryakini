let template = document.getElementById("template");
let container = document.getElementById("items");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pat56tfP2XEHesKmi.26e076d65e5d850669b7535104b874ded3100bbcfac74a895caf6999eb8b4c15'}).base('appjAt0R0NzejkdO3');

base('collection').select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get('name'));

        let templateCopy = template.cloneNode(true);
        container.appendChild(templateCopy);

        templateCopy.querySelector(".title").append(record.get('name'));
		templateCopy.querySelector(".image").append(record.get('photo'));
        if(record.get('source') != ""){
            templateCopy.querySelector("source").append(record.get('source'));
        }else{
            templateCopy.querySelector("source").append("");
        }
		templateCopy.querySelector(".desc").append(record.get('desc'));
        templateCopy.removeAttribute('id');

        getColour(record.get('category'));

        // console.log('Retrieved', record.get('name'), ' ' , record.get('relationship'), ' ' , record.get('testimonial'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();


    function getColour(category){
        let cat = category;
        if (category == "desi"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px yellow);");

        }else if (category == "trash"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px pink);");

        }else if (category == "kathak"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px orange);");

        }else if (category == "singapore"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px red);");

        }else if (category == "labor"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px blue);");

        }else if (category == "misc"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px green);");

        }else if (category == "family"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px violet);");

        }else if (category == "friends"){
            templatecopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px magenta);");

        }
    }
}, function done(err) {
    if (err) { console.error(err); return; }
});

let hide = document.getElementsByClassName("tooltip")[0];
hide.classList.add("hide");

let cards = [];
let posX;
let posY;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let w = windowWidth - (0.25*windowWidth);
let h = windowHeight - (0.25*windowHeight);

console.log(w);
console.log(h);

cards = document.getElementsByClassName("tooltip");

function origPositions(){
    for (let i = 0; i < cards.length; i++){
        posX = Math.floor(Math.random()*w);
        posY = Math.floor(Math.random()*h);
        cards[i].style.top = posY + "px";
        cards[i].style.left = posX + "px";
        
        console.log("Number " + i + " | posX = " + posX + "px & posY = " + posY + "px");
    }
}

/***************************************************************************************
    Title: JavaScript - How to make multiple divs draggable and movable across the website
    Author: user6439507
    Date: June 4, 2019
    Availability: https://stackoverflow.com/questions/51409650/javascript-how-to-make-multiple-divs-draggable-and-movable-across-the-website
***************************************************************************************/

var draggableElements = document.getElementsByClassName("tooltip");
console.log("draggies = " + draggableElements.length); //checking that array exists and is populated

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // element.addEventListener('touchstart', dragMouseDown);
    // element.addEventListener('touchmove', dragMouseDown);
    element.onmousedown = dragMouseDown;
    element.addEventListener('touchmove', function(e) {
        // grab the location of touch
        var touchLocation = e.targetTouches[0];
        
        // assign box new coordinates based on the touch.
        element.style.left = touchLocation.pageX + 'px';
        element.style.top = touchLocation.pageY + 'px';
      })

    function dragMouseDown(e) {
        // e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener('touchend', function(e) {
            // current box position.
            var x = parseInt(element.style.left);
            var y = parseInt(element.style.top);
          })
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        // e = e || window.event;
        e.preventDefault(); //this makes things break on mobile for some reason
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
/***************************************************************************************/