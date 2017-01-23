/*Function to randomly make a choice by computer, since here we have 5 choices so could'nt utilise the earlier function*/
function moreChoices(choice){
	document.getElementById("dropdownMenu1").innerHTML = choice;
    var yourChoice = document.getElementById("dropdownMenu1").innerHTML;
    var compChoice = Math.random();
    
   	if(compChoice <= 0.20){
   		document.getElementById('compChoice').innerHTML = 'Rock'; 
   	}else if (compChoice >= 0.21 && compChoice <= 0.40){
   		document.getElementById('compChoice').innerHTML = 'Paper'; 
   	}else if(compChoice >= 0.41 && compChoice <= 0.60){
   		document.getElementById('compChoice').innerHTML = 'Scissors'; 
   	}else if(compChoice >= 0.61 && compChoice <= 0.80){
   		document.getElementById('compChoice').innerHTML = 'Lizard'; 
   	}else {
   		document.getElementById('compChoice').innerHTML = 'Spock'; 
   	}

   	choice1 = yourChoice.toLowerCase();
   	choice2 = document.getElementById('compChoice').innerHTML.toLowerCase();
   	moreChoicesResults(choice1,choice2)
}
/*Passing the choices made by user and the computer to the function*/
/*resultofGame is the function which passes the value of the result and respective alerts are shown in the UI*/
function moreChoicesResults(choice1,choice2){
	if(choice1 === choice2){
		resultofGame('tie');
	}else if(choice1 === 'rock'){
		if(choice2 === 'lizard' || choice2 === 'scissors'){
			resultofGame('won');
		}else {
			resultofGame('lost');
		}
	}else if(choice1 === 'paper'){
		if(choice2 === 'rock' || choice2 === 'spock'){
			resultofGame('won');
		}else {
			resultofGame('lost');
		}
	}else if(choice1 === 'scissors'){
		if(choice2 === 'lizard' || choice2 || 'paper'){
			resultofGame('won');
		}else {
			resultofGame('lost');
		}
	}else if(choice1 === 'lizard'){
		if(choice2 === 'spock' || choice2 === 'paper'){
			resultofGame('won');
		}else {
			resultofGame('lost');
		}
	}else {
		if(choice2 === 'scissors' || choice2 === 'rock'){
			resultofGame('won');
		}else {
			resultofGame('lost');
		}
	}
}