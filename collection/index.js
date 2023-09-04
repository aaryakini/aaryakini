let template = document.getElementById("template");
let container = document.getElementById("items");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pat56tfP2XEHesKmi.26e076d65e5d850669b7535104b874ded3100bbcfac74a895caf6999eb8b4c15'}).base('appjAt0R0NzejkdO3');

base('collection').select({
    // maxRecords: 3,
    view: "Grid view"
}).eachPage(async function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get('photo')[0].url);

        let templateCopy = template.cloneNode(true);
        container.appendChild(templateCopy);

        templateCopy.querySelector(".title").append(record.get('name'));
		templateCopy.querySelector('img').src = record.get('photo')[0].url;
        if (record.get('category') == "desi"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px yellow);");

        }else if (record.get('category') == "trash"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px pink);");

        }else if (record.get('category') == "kathak"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px orange);");

        }else if (record.get('category') == "singapore"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px red);");

        }else if (record.get('category') == "labor"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px blue);");

        }else if (record.get('category') == "misc"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px green);");

        }else if (record.get('category') == "family"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px violet);");

        }else if (record.get('category') == "friends"){
            templateCopy.setAttribute("style", "-webkit-filter: drop-shadow(5px 5px 5px magenta);");

        }
        if(record.get('source') != ""){
            templateCopy.querySelector(".source").append(record.get('source'));
        }else{
            let element = templateCopy.getElementsByClassName(className)[0];
            templateCopy.removeChild(element);
        }

        // templateCopy.querySelector(".source").append(record.get('source'));
		templateCopy.querySelector(".desc").append(record.get('desc'));
        templateCopy.removeAttribute('id');

        templateCopy.style.left = getPosX();
        templateCopy.style.top = getPosY();

        console.log('Retrieved', record.get('name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});

function getPosX(){
   let posX = Math.floor(Math.random() * ((container.clientWidth - 30) - 30) + 30);
   return posX + "px";
}

function getPosY(){
    let posY = Math.floor(Math.random() * ((container.clientHeight - 30) - 30) + 30);
    return posY + "px";
}

/***************************************************************************************
    Title: JavaScript - How to make multiple divs draggable and movable across the website
    Author: user6439507
    Date: June 4, 2019
    Availability: https://stackoverflow.com/questions/51409650/javascript-how-to-make-multiple-divs-draggable-and-movable-across-the-website
***************************************************************************************/

var draggableElements = document.getElementsByClassName("tooltip");
console.log("draggable elements = " + draggableElements.length); //checking that array exists and is populated

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