function randomChoices(){
	var comp1choice=Math.floor(Math.random()*4)+1; 
	var comp2choice=Math.floor(Math.random()*3)+1;
	while (comp2choice == comp1choice)
	{
   		comp2choice=Math.floor(Math.random()*3)+1;
	}

	
		if(comp1choice % 2 == 0){
			document.getElementById('comp1choice').innerHTML = 'Rock';
			if(comp2choice % 2 == 0){
				document.getElementById('comp2choice').innerHTML = 'Paper';
			}else{
				document.getElementById('comp2choice').innerHTML = 'Scissors';
			}
		}else if(comp1choice % 3 == 0 || comp1choice % 5 == 0){
			document.getElementById('comp1choice').innerHTML = 'Scissors';
			if(comp2choice % 3 == 0 || comp2choice % 5 == 0){
				document.getElementById('comp2choice').innerHTML = 'Rock';
			}
			else {
				document.getElementById('comp2choice').innerHTML = 'Paper';
			}
		}else {
			document.getElementById('comp1choice').innerHTML = 'Paper';
			if(comp2choice % 4 == 0){
				document.getElementById('comp2choice').innerHTML = 'Rock';
			}else {
				document.getElementById('comp2choice').innerHTML = 'Scissors';
			}
		}
	

	choice1 = document.getElementById('comp1choice').innerHTML.toLowerCase();
	choice2 = document.getElementById('comp2choice').innerHTML.toLowerCase();

	choices(choice1,choice2);

}


window.onload = function (){
	window.setInterval(function(){
  		randomChoices();
	}, 5000);
}