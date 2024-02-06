function showHide(name){
    console.log(name);
	let x = document.getElementById(name);
	if (x.style.visibility == "visible") {
		x.style.visibility = "hidden";
	} else {
		x.style.visibility = "visible";
	}
}





