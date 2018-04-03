console.log("This is a test");

var states = ["Washington", "Oregon", "California", "Nevada", "Idaho", "Montana", "Wyoming", "Utah", "Arizona",
		"New Mexico", "Colorado", "North Dakota", "South Dakota", "Nebraska", "Kansas", "Oklahoma", "Texas",
		"Minnesota", "Iowa", "Missouri", "Arkansas", "Louisiana", "Wisconsin", "Illinois", "Mississippi", "Alabama",
		"Tennessee", "Kentucky", " Indiana", "Michigan", "Ohio", "West Virginia", "Florida", "Georgia", "South Carolina",
		"North Carolina", "Virginia", "Maryland", "Delaware", "New Jersey", "Pennsylvania", "New York", "Connecticut",
		"Rhode Island", "Massachusetts", "Vermont", "New Hampshite", "Maine", "Alaska", "Hawaii"];
console.log(states.length);

function check(){
	var value = document.getElementById("input").value;
	console.log(value);
	document.getElementById("input").value = "";
}