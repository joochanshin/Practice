console.log("This is a test");

const states = ["Washington", "Oregon", "California", "Nevada", "Idaho", "Montana", "Wyoming", "Utah", "Arizona",
		"New Mexico", "Colorado", "North Dakota", "South Dakota", "Nebraska", "Kansas", "Oklahoma", "Texas",
		"Minnesota", "Iowa", "Missouri", "Arkansas", "Louisiana", "Wisconsin", "Illinois", "Mississippi", "Alabama",
		"Tennessee", "Kentucky", " Indiana", "Michigan", "Ohio", "West Virginia", "Florida", "Georgia", "South Carolina",
		"North Carolina", "Virginia", "Maryland", "Delaware", "New Jersey", "Pennsylvania", "New York", "Connecticut",
		"Rhode Island", "Massachusetts", "Vermont", "New Hampshite", "Maine", "Alaska", "Hawaii"];
var correct = [];
console.log(states.length);

function check(){
	var value = document.getElementById("input").value;
	console.log(value);
	console.log(states_check(value));
	document.getElementById("input").value = "";
}

function states_check(value){
	for(let i = 0; i < states.length; i++){
		if(value.toLowerCase() === states[i].toLowerCase() && !already_guessed(value)){
			// console.log(value, states[i], already_guessed());
			correct.push(value);
			return "You are correct";
		}
	}
	return "Wrong or already guessed";
}

function already_guessed(value){
	console.log("Length", correct.length);
	for(let i = 0; i < correct.length; i++)
		if(value.toLowerCase() === correct[i].toLowerCase())
			return true;
	return false;
}