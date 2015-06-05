var voteContent;
var galleryContent;
var submitContent;
var aboutContent;

function voteButton() {
	//get the content
	voteContent = document.getElementById("vote"); 
	//get the current value of the display
	var displaySetting = voteContent.style.display;
	//button text
	var voteButton = document.getElementById('voteButton');
	//make content conditionaly visible
	if (displaySetting === 'none') {
		//meaning the vote page is not visible
		voteContent.style.display = 'block';
		//change text on button
		voteButton.innerHTML = 'HIDE VOTE';
	}
	else {
		voteContent.style.display = 'none';
		//change text on button
		voteButton.innerHTML = 'SHOW VOTE';
	}
}

function galleryButton() {
	//get the content
	galleryContent = document.getElementById("gallery"); 
	//get the current value of the display
	var displaySetting = galleryContent.style.display;
	//button text
	var galleryButton = document.getElementById('galleryButton');
	//make content conditionaly visible
	if (displaySetting === 'none') {
		//meaning the vote page is not visible
		galleryContent.style.display = 'block';
		//change text on button
		galleryButton.innerHTML = 'HIDE GALLERY';
	}
	else {
		galleryContent.style.display = 'none';
		//change text on button
		galleryButton.innerHTML = 'SHOW GALLERY';
	}
}


function submitButton() {
	//get the content
	submitContent = document.getElementById("submit"); 
	//get the current value of the display
	var displaySetting = submitContent.style.display;
	//button text
	var submitButton = document.getElementById('submitButton');
	//make content conditionaly visible
	if (displaySetting === 'none') {
		//meaning the vote page is not visible
		submitContent.style.display = 'block';
		//change text on button
		submitButton.innerHTML = 'HIDE SUBMIT';
	}
	else {
		submitContent.style.display = 'none';
		//change text on button
		submitButton.innerHTML = 'SHOW SUBMIT';
	}
}


function aboutButton() {
	//get the content
	aboutContent = document.getElementById("about"); 
	//get the current value of the display
	var displaySetting = aboutContent.style.display;
	//button text
	var aboutButton = document.getElementById('aboutButton');
	//make content conditionaly visible
	if (displaySetting === 'none') {
		//meaning the vote page is not visible
		aboutContent.style.display = 'block';
		//change text on button
		aboutButton.innerHTML = 'HIDE ABOUT';
	}
	else {
		aboutContent.style.display = 'none';
		//change text on button
		aboutButton.innerHTML = 'SHOW ABOUT';
	}
}


