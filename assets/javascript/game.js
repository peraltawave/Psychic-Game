    

        var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our w l and guesses
        var wins = 0;
        var losses = 0;
        var guesses = 10;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)



   // When the user presses a key it fires this stuff below
   document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        
        // increase wins count
        wins++;

        // this will reset guesses to 10 and pick a new letter
        ResetGlobalVariables();

    }else{

        //decrease guess count
        guesses--;
    }

    if(guesses === 0){

        //increase loss count 
        losses++;

        // Reset the guesses only - but doesn't pick a new letter - should I do this?
        ResetGuesses();
        
    }
        // This resets the gusses only - i nested this into ResetGlobalVariables too just as an experiment
        function ResetGuesses(){
            guesses = 10;
    }

        // This resets the gusses only - i nested this into ResetGlobalVariables too just as an experiment
        function ResetLetters(){
            document.getElementById('lettersGuessed').textContent = (null);
    }


    // this function resets the computerchoice
    function ResetGlobalVariables(){
        ResetGuesses();
        ResetLetters();
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice)
    }



    document.getElementById('lettersGuessed').textContent += userGuess;

    // i think this is where i can append the guesses so that they all display instead of just one at a time -- but i haven't figured this out

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;

};
        
            
            
           