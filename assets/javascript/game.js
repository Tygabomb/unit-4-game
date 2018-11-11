
// ready to start ?? i tried using .load but i got an error message
$(document).ready(function () {

	//variables to store wins
	var wins = 0;
	var losses = 0;
	var secs = 0;
	
	
	$("#winCount").html(wins);

	$("#lossCount").html(losses);

    userScore = 0;
	$("#userScore").html(userScore);

	// global timer for the game alerts time left and in theory... stops the game when it hits zero
	var targetDiv = document.getElementById("empty-div");
	var targetDiv = setInterval(function () {
		secs++; console.log(secs);
		if (secs > 5) {
			

			targetDiv.textContent = 'Total Time: ' + secs + ' seconds';
			clearInterval(targetDiv);
			
		}
	}, 1000 * 100);

	// setInterval();

	// random number chosser
	var numberChooser = function () {
		return Math.floor(Math.random() * (120 - 19 + 1) + 19);
	};

	// stores total count in a variable
	var targetNumber = numberChooser();

	//displays the random number on html page
	$("#targetNumber").html(targetNumber);

	//4 functions to generate random numbers 
	var character1NumberChooser = function () {
		return Math.floor(Math.random() * (10 - 1 + 1) + 1);
	};
	var character2NumberChooser = function () {
		return Math.floor(Math.random() * (10- 1 + 1) + 1);
	};
	var character3NumberChooser = function () {
		return Math.floor(Math.random() * (10 - 1 + 1) + 1);
	};
	var character4NumberChooser = function () {
		return Math.floor(Math.random() * (10 - 1 + 1) + 1);
	};

	//stores the 4 random numbers into 4 different variables; 1 for each crystal
	var chac1Number = character1NumberChooser();
	var chac2Number = character2NumberChooser();
	var chac3Number = character3NumberChooser();
	var chac4Number = character4NumberChooser();

	//click function for 1st Chac 
	$("#character1").on("click", function () {

		//add the random number generated from clicking on the crystal to the user score
		userScore += chac1Number;
		$("#userScore").html(userScore);

		//if the user score equals the target number, add to user's wins
		//reset the user score to "reset" the game
		//rerun the random function of character 1,2,3 and 4 so they can change to a diff number
		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}

		//if the user score goes over the target number, add to user's losses
		//reset user score to "reset" the game
		//rerun the random function of character 1,2,3 and 4 so they can change to a diff number
		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}

	});

	//and repeat,  could've used for loops but i couldn't get them to function or return data

	$("#character2").on("click", function () {

		userScore += chac2Number;
		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}

	});

	$("#character3").on("click", function () {

		userScore += chac3Number;
		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}

	});

	$("#character4").on("click", function () {

		userScore += chac4Number;
		$("#userScore").html(userScore);

		if (userScore === targetNumber) {
			userScore = 0;
			wins++;
			$("#winCount").html(wins);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}

		if (userScore > targetNumber) {
			userScore = 0;
			losses++;
			$("#lossCount").html(losses);
			targetNumber = numberChooser();
			$("#targetNumber").html(targetNumber);
			chac1Number = character1NumberChooser();
			chac2Number = character2NumberChooser();
			chac3Number = character3NumberChooser();
			chac4Number = character4NumberChooser();
		}


		
	});

});
