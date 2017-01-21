/*Function to generate random number and decide who won and lost*/

function gameResult(choice) {
	document.getElementById("dropdownMenu1").innerHTML = choice;
    var yourChoice = document.getElementById("dropdownMenu1").innerHTML;
    var compChoice = Math.random();
    
   	if(compChoice <= 0.33){
   		document.getElementById('compChoice').innerHTML = 'Rock'; 
   	}else if (compChoice >= 0.34 && compChoice <= 0.67){
   		document.getElementById('compChoice').innerHTML = 'Paper'; 
   	}else {
   		document.getElementById('compChoice').innerHTML = 'Scissors'; 
   	}

   	choice1 = yourChoice.toLowerCase();
   	choice2 = document.getElementById('compChoice').innerHTML.toLowerCase();
   	choices(choice1,choice2)
   	
	}
	function choices(choice1,choice2){
   		if(choice1 === choice2){
			resultofGame('tie');
   		}else if(choice1 === 'rock'){
   			if(choice2 === 'scissors'){
   				resultofGame('won');
   			}else{
   				resultofGame('lost');
   			}
		}else if(choice1 === 'paper') {
			if(choice2 === 'scissors'){
				resultofGame('lost');
			}else {
				resultofGame('won');
			}
		}else if(choice1 === 'scissors') {
			if(choice2 === 'paper'){
				resultofGame('won');
			}else {
				resultofGame('lost');
			}
		}else {
			alert("Wrong choice , you should select among Rock , Paper or Scissors!!");
   			document.getElementById("dropdownMenu1").value = '';
		}

   	}

/*Function to show hide the buttons according to the result*/
function resultofGame (result) {
	if(result === 'won'){
		document.getElementById("won").className = "btn btn-primary";
   		document.getElementById("tie").className = "hide";
   		document.getElementById("lost").className = "hide";
   		calculateScore('won');
	}else if(result === 'lost'){
		document.getElementById("lost").className = "btn btn-danger";
   		document.getElementById("won").className = "hide";
   		document.getElementById("tie").className = "hide";
   		calculateScore('lost');
	}else {
		document.getElementById("tie").className = "btn btn-info";
		document.getElementById("lost").className = "hide";
		document.getElementById("won").className = "hide";
	}
}
/*Function to calculate score in the table and keep track of the game*/
function calculateScore (result){
	var myTable = document.getElementById('resultTable');
	if(result === 'won'){
		var yourScore = parseInt(document.getElementById("yourScore").innerHTML) + 1;
		document.getElementById("yourScore").innerHTML = yourScore;
	} else {
		var compScore = parseInt(document.getElementById("compScore").innerHTML) + 1;
		document.getElementById("compScore").innerHTML = compScore;
	}
}


/*Function to reset the score and restart the game*/
function resetScore (){
	document.getElementById("yourScore").innerHTML = 0;
	document.getElementById("compScore").innerHTML = 0;
	document.getElementById('compChoice').innerHTML = ''; 
}
