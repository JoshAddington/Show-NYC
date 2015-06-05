//update user page

//object to manage AJAX interactions: 
xmlhttp = new XMLHttpRequest();

//monitor object
xmlhttp.onreadystatechange = //runs when event fires
function()
{
	if (xmlhttp.readyState ==4 && xmlhttp.status ==200)
		{
			document.getElementById('scores').innerHTML = xmlhttp.responseText
		}
	else {
		document.getElementById('scores').innerHTML = "waiting for server response"
	}
}
xmlhttp.open('GET', 'file:///Users/emma/Documents/intern-cms/Website%20Branch/website.html', true);
xmlhttp.send();

//function goes here
getScores()