//Function that wraps everything, makes sure nothing runs until HTML is ready
$(document).ready(function () {
//Creating an h1 for the game title
	const titleText = $("<h1>");
	// Creating the text for the h1
	$(titleText).text("CrystalsCollector!");
	// appending the h1 text inside the game-title div to appear on page
	$("#game-title").append(titleText);
	// Creating a paragraph elements for the text
	const instructionsText1 = $("<p>");
	const instructionsText2 = $("<p>");
	const instructionsText3 = $("<p>");
	const instructionsText4 = $("<p>");
	const instructionsText5 = $("<p>");
	// Creating text for each <p> element
	$(instructionsText1).text("You will be given a random number at the start of the game.");
	$(instructionsText2).text("There are four crystals below. By clicking on a crystal you will add a specfic amount of points to your total score.");
	$(instructionsText3).text("You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number. ");
	$(instructionsText4).text("The value of each crystal is hidden from you until you click on it.")
	$(instructionsText5).text("Each time when the game starts, the game will change the values of each crystal.");
	//Append text created to instructions div
	$("#instructions").append(instructionsText1, instructionsText2, instructionsText3, instructionsText4, instructionsText5);
	// Creating variable for random number between 19 & 120
	//Making Math.random work how I wanted referenced by #TeamRoPo as well as "https://stackoverflow.com/questions/43791101/how-does-math-floor-math-random-10-1-work"
	let randomNumber = Math.floor(Math.random() * 100) + 19;
	// Creating a div for randomNumber to occupy
	const randomDiv = $("<h3>");
	// Inserting randomNumber into randomDiv
	$(randomDiv).text(randomNumber);
	// Adding randomDiv to HTML
	$("#random-number").append(randomDiv);
	//Making variables for wins and losses
	let wins = 0;
	let losses = 0;
	// Creating h3 for wins and losses to display
	let winsText = $("<h3>");
	let lossesText = $("<h3>");
	//Added text to winsText and lossesText
	$(winsText).text("Wins: " + wins);
	$(lossesText).text("Losses: " + losses);
	//Inserting winsText and lossesText to HTML
	$("#wins-losses").append(winsText, lossesText);
	//Creating variables assoicated with each crystal
	const redCrystal = $("<img>");
	const blueCrystal = $("<img>");
	const orangeCrystal = $("<img>");
	const greenCrystal = $("<img>");
	// Attach each img to the img tag
	redCrystal.attr("src", "assets/images/red.png");
	blueCrystal.attr("src", "assets/images/blue.png");
	orangeCrystal.attr("src", "assets/images/orange.png");
	greenCrystal.attr("src", "assets/images/green.png");
	// Added each image to the page, will add data value later
	$("#crystals").append(redCrystal, blueCrystal, orangeCrystal, greenCrystal);
	//Creating variables for "your total score is", and user's score
	const scoreTitle = $("<p>");
	let counter = 0;
	console.log(counter);
	let counterText = $("<h3>");
	// Added variable text into dynamically created HTML elements
	scoreTitle.text("Your total score is:");
	counterText.text(counter);
	//Adding text onto HTML
	$("#score-title").append(scoreTitle);
	$("#user-score").append(counterText);
	//Adding value to each crystal between 1-12
	redCrystal.attr("data-redvalue", Math.floor(Math.random() * 11) + 1);
	blueCrystal.attr("data-bluevalue", Math.floor(Math.random() * 11) + 1);
	orangeCrystal.attr("data-orangevalue", Math.floor(Math.random() * 11) + 1);
	greenCrystal.attr("data-greenvalue", Math.floor(Math.random() * 11) + 1);
	//Creating on-click event for red crystal
	$(redCrystal).on("click", function () {
		// Extracting the value from red crystal and converting it to an integer, and add it to global counter
		let redValue = ($(this).attr("data-redvalue"));
		redValue = parseInt(redValue);
		console.log(redValue);
		counter += redValue
		counterText.text(counter);
		console.log(counter);
		winsText.text("Wins: " + wins);
		lossesText.text("Losses: " + losses)
		// Adding conditionals to change wins or losses
		if (counter === randomNumber) {
			// Adding 1 to wins and displaying it immediately in winsText
			wins++;
			winsText.text("Wins: " + wins);
			// Resetting the random number to a different number and updating text
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting  counter to zero and updating text
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a different number
			redCrystal.attr("data-redvalue", Math.floor(Math.random() * 11) + 1);
		} else if (counter > randomNumber) {
			// Adding 1 to losses and displaying it immediately in lossesText
			losses++;
			lossesText.text("Losses:" + losses);
			// Choosing and displaying a new random number
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting counter to 0 and updating display
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a new number
			redCrystal.attr("data-redvalue", Math.floor(Math.random() * 11) + 1);
		} else {}
	})
	//Creating on-click event for blue crystal
	$(blueCrystal).on("click", function () {
		// Extracting the value from blue crystal and converting it to an integer, and add it to global counter
		let blueValue = ($(this).attr("data-bluevalue"));
		blueValue = parseInt(blueValue);
		console.log(blueValue);
		counter += blueValue
		counterText.text(counter);
		console.log(counter);
		winsText.text("Wins: " + wins);
		lossesText.text("Losses: " + losses)
		// Adding conditionals to change wins or losses
		if (counter === randomNumber) {
			// Adding 1 to wins and displaying it immediately in winsText
			wins++;
			winsText.text("Wins: " + wins);
			// Resetting the random number to a different number and updating text
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting  counter to zero and updating text
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a different number
			blueCrystal.attr("data-bluevalue", Math.floor(Math.random() * 11) + 1);
		} else if (counter > randomNumber) {
			// Adding 1 to losses and displaying it immediately in lossesText
			losses++;
			lossesText.text("Losses:" + losses);
			// Choosing and displaying a new random number
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting counter to 0 and updating display
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a new number
			blueCrystal.attr("data-bluevalue", Math.floor(Math.random() * 11) + 1);
		} else {}
	})
	//Creating on-click event for orange crystal
	$(orangeCrystal).on("click", function () {
		// Extracting the value from orange crystal and converting it to an integer, and add it to global counter
		let orangeValue = ($(this).attr("data-orangevalue"));
		orangeValue = parseInt(orangeValue);
		console.log(orangeValue);
		counter += orangeValue
		counterText.text(counter);
		console.log(counter);
		winsText.text("Wins: " + wins);
		lossesText.text("Losses: " + losses)
		// Adding conditionals to change wins or losses
		if (counter === randomNumber) {
			// Adding 1 to wins and displaying it immediately in winsText
			wins++;
			winsText.text("Wins: " + wins);
			// Resetting the random number to a different number and updating text
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting  counter to zero and updating text
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a different number
			orangeCrystal.attr("data-orangevalue", Math.floor(Math.random() * 11) + 1);
		} else if (counter > randomNumber) {
			// Adding 1 to losses and displaying it immediately in lossesText
			losses++;
			lossesText.text("Losses:" + losses);
			// Choosing and displaying a new random number
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting counter to 0 and updating display
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a new number
			orangeCrystal.attr("data-orangevalue", Math.floor(Math.random() * 11) + 1);
		} else {}
	})
	//Creating on-click event for green crystal
	$(greenCrystal).on("click", function () {
		// Extracting the value from green crystal and converting it to an integer, and add it to global counter
		let greenValue = ($(this).attr("data-greenvalue"));
		greenValue = parseInt(greenValue);
		console.log(greenValue);
		counter += greenValue
		counterText.text(counter);
		console.log(counter);
		winsText.text("Wins: " + wins);
		lossesText.text("Losses: " + losses)
		// Adding conditionals to change wins or losses
		if (counter === randomNumber) {
			// Adding 1 to wins and displaying it immediately in winsText
			wins++;
			winsText.text("Wins: " + wins);
			// Resetting the random number to a different number and updating text
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting  counter to zero and updating text
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a different number
			greenCrystal.attr("data-greenvalue", Math.floor(Math.random() * 11) + 1);
		} else if (counter > randomNumber) {
			// Adding 1 to losses and displaying it immediately in lossesText
			losses++;
			lossesText.text("Losses:" + losses);
			// Choosing and displaying a new random number
			randomNumber = Math.floor(Math.random() * 100) + 19;
			randomDiv.text(randomNumber);
			// Resetting counter to 0 and updating display
			counter = 0;
			counterText.text(counter);
			// Resetting crystal value to a new number
			greenCrystal.attr("data-greenvalue", Math.floor(Math.random() * 11) + 1);
		} else {}
	})
});

/* Pseudo Code
/1. Add title and instructions to the page.
/2. Add random number to the page.
/3. Add wins/losses to the page
/4. Add crystals to the page.
/5. Add total player score to the page.
/6. Add point value to crystals when clicked.
/7. Get point value to not add to counter twice.
*/