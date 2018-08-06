//word library
var wordLib = 
["CROSBY", "HULL", "LAFLEUR", "MESSIER", "BELIVEAU", "RICHARD", "LEMIEUX", "ORR", "GRETZKY", "HOWE", "CLARK", "GILMOUR", "MATTHEWS", "TAVARES"];

//available letters
var availableLetters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

var guesses = [];		//empty array for guessed letters
var spaces = [];		//empty array for spaces
var letters;			//empty variable for letters & spaces
var wins = 0;			//win variable
var losses = 0;			//loss variable
var lives ;				//user starts with lives = #of letters in currentWord + 5
var correctGuess ;		//correct guess counter
var currentWord ;		//choose a word
var removeSpaces ;		//removeSpaces will remove spaces from dictionary when used with split
var wordSeparated ;		//wordSeparated will house array for currentWord after split
var lettersGuessed ;	//guessed letters
var lettersMatched ;	//matched letters
var images = ["CROSBY", "HULL", "LAFLEUR", "MESSIER", "BELIVEAU", "RICHARD", "LEMIEUX", "ORR", "GRETZKY", "HOWE", "CLARK", "GILMOUR", "MATTHEWS", "TAVARES", "STANLEYCUP", "GAMEOVER"]


function startUp () 
{
	currentWord = wordLib[Math.floor(Math.random() * wordLib.length)];
	console.log(currentWord);

	for (var i = 0; i < currentWord.length; i++) 
	{
		if (currentWord[i] === "") 
		{
			spaces[i] = "";
		}
		else 
		{
			spaces[i] = "_";
		}
	}

	letters = spaces.join("");
	document.getElementById("letters").innerHTML = letters;

	lives = (currentWord.length + 5);
	document.getElementById("lives").innerHTML = lives;

	correctGuess = 0;
}

/////////////////////////////////
//will set up game on window load
window.onload = function startUp () 
{
	currentWord = wordLib[Math.floor(Math.random() * wordLib.length)];
	console.log(currentWord);

	for (var i = 0; i < currentWord.length; i++) 
	{
		if (currentWord[i] === "_") 
		{
			spaces[i] = "";
		}
		else 
		{
			spaces[i] = "_ ";
		}
	}

	letters = spaces.join("");
	document.getElementById("letters").innerHTML = letters;

	lives = (currentWord.length + 5);
	document.getElementById("lives").innerHTML = lives;

	correctGuess = 0;
}

/////////////////////////
//reset default variables
function resetVariables() 
{
	guesses = [];
	spaces = [];
	startUp();
}

/////////////////////
//main game processes
document.onkeyup = function(event) 
{
	var userGuess = event.key.toUpperCase();

	// is guess a valid letter? (according to available letters)
    if (availableLetters.indexOf(userGuess) > -1) 
    {
        // has it been guessed already?
        for (var i = 0; i < guesses.length; i++)
        {
        	if (guesses[i] === userGuess)
        	{
        		document.getElementById("winnerMessage").innerHTML = "You've already guessed this letter!";
            	lives.classList.add("text-warning");
        	}
        }

		for (var i = 0; i < currentWord.length; i++)
		{
			if (currentWord[i] === userGuess)
			{
				spaces[i] = userGuess;
				correctGuess++;
			}
		}

		///////////////////////// not working /////////
//	if (images == currentWord) {
//		document.getElementById("LEMIEUX").classList('images-show')
//	}



		guesses.push(userGuess);	
		lives--;
	}
	// not a valid letter, error
    else 
    {
    	document.getElementById("winnerMessage").innerHTML = "This is not a valid letter, try again!";
    }

/////////////////
//losing function
	function loser() 
	{
		if (lives < 0) 
		{
		document.getElementById("winnerMessage").innerHTML = "You Lose! The word was: " + currentWord.toUpperCase();
		losses++;
		document.getElementById("losses").innerHTML = losses;
		resetVariables();
		}
	}

//////////////////
//winning function
	function winner() 
	{
		if (correctGuess === currentWord.length) 
		{
			document.getElementById("winnerMessage").innerHTML = "You Win! The word was: " + currentWord.toUpperCase();
			wins++;
			document.getElementById("wins").innerHTML = wins;
//not working			document.getElementById("STANLEYCUP").style.cssText = "display: block";		
			resetVariables();
		}
	}

	document.getElementById("lives").innerHTML = lives;
	document.getElementById("letters").innerHTML = spaces.join(" ");
	document.getElementById("guesses").innerHTML = guesses.join(" ");


	loser();
	winner();

}




///if win clear letters used
///images for each player
/// set attribute

