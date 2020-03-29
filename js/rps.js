
function rps(userInput) {

	var compChoice = Math.floor(Math.random() * 3);
	//0 is rock, 1 is paper, 2 is scissors
	var result, yourThrow;

	if (compChoice === userInput) {
		result = "Draw!";
	}

	if (compChoice === 0 && userInput === 1) {
		result = "You win!";
	} else if (compChoice === 0 && userInput === 2){
		result = "You lose :(";
	}  else if (compChoice === 1 && userInput === 0){
		result = "You lose :(";
	}	else if (compChoice === 1 && userInput === 2){
		result = "You win!";
	}	else if (compChoice === 2 && userInput === 0){
		result = "You win!";
	}	else if (compChoice === 2 && userInput === 1){
		result = "You lose :(";
	}

	switch (userInput) {
		case 0:
			yourThrow = "You picked rock. "
			break;

		case 1:
			yourThrow = "You picked paper. "
			break;

		case 2:
			yourThrow = "You picked scissors. "
			break;
	}

	window.alert(yourThrow + result);
}
