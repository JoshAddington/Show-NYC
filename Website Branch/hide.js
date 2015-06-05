function voteButton(id) {
	console.log("here");
	var divelement = document.getElementById(id);
	if divelement.style.display == 'none'){
		divelement.style.display = 'block';
	}
	else{
		divelement.style.display = 'none'
	}