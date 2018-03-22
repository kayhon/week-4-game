// this can be the javacript file for the crystal game
//the number generated @ the begining of each round by the main between 12-120 - this is a function or a process that I want the computer run over and over. Write the function in javascript and call it in jQuery - although in terms of syntax the jQuery goes before the javascript
(document).ready(function(){
    var mainTotal = Math.floor(Math.random()*101 + 19);
    console.log(mainTotal);
    });
    
    //appending the main total # so I can use it in html through an id - appending is a jQuery thing
    $('#targetScore').text(mainTotal);
    console.log(mainTotal);
    
    //so the sum of the selected/clicked button and the current totalScore - not sure about this pseudocode - i think that the variable should be set to the begining state of totalScore, so that I can write a function with this variable.  How do I best distinguish the difference between these things at this state of writing?
    //1.jQuery goes first
    
    var totalScore = 0;
    
    //===when mainTotal === totalScore - same question here - how do I know that the variable needs to be defined as its starting state.  At this point, because I've been thinking about it so long, I know that I'm going to use this variable as a way to add and record (maybe thats it - the place where it gets recorded, variables are the place where changing #'s get stored??')
    var wins = 0;
    
    // ===when total Score is > mainTotal - same question here
    var losses = 0;
    
    //jQuery needs the variables to be called, looks similar to appending code above
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    console.log(wins);
    console.log(losses);
    
    
    //The buttons script included in start game function
    function start () {
        (document).ready(function(){
        var mainTotal = Math.floor(Math.random()*101 + 19);
        console.log(mainTotal);
        //appending it to an id that Im defining so html can use it
        $('#targetScore').text(mainTotal);
        console.log(mainTotal);
        //this is the button that generates (and hides behind an image) random # between 1 - 12
        var crystalButton1 = Math.floor(Math.random()*11+1);
        //this is the button that generates (and hides behind an image) and random # between 1 - 12
        var crystalButton2 = Math.floor(Math.random()*11+1);
        //this is the button that generates (and hides behind an image) and random # between 1 - 12
        var crystalButton3 = Math.floor(Math.random()*11+1);
        //this is the button that generates (and hides behind an image) and random # between 1 - 12
        var crystalButton4 = Math.floor(Math.random()*11+1);
        //this is returning the total score to 0
        var totalScore = 0;
        $('#userScoreCounter').text(totalScore);
    });
    //when the the totalScore is equal to the main Total, then this function will be called
    function success() {
        $('#numberWins').text(wins);
        console.log('AWESOME!');
        //adding 1 to to win counter
        wins++;
        //start function being called by the success function
        start();
    }
    
    //this is the same as success function but losses variable gets added to
    function fail() {
        $('#numberLosses').text(losses);
        console.log("Sorry - try Again!");
        losses++;
        //start game function is being called
        start();
    
    }
    
    //this is getting the buttons to work.  append each variable with jQuery so html can use it. Give each button an onclick function so it will activate when the user clicks on the image, then define the function you want the main to perform - which is adding the image # with the total score #.
    $('#buttonOne').click(function() {
        totalScore = totalScore + crystalButton1;
        console.log(totalScore + crystalButton1);
    });
              $('#finalTotal').text(totalScore); 
              //win operation
            if (totalScore == mainTotal){
              success();
            }
            //lose operation
            else if (totalScore > mainTotal){
              fail();
    }
            //repeat for 3 other buttons
    
    $('#buttonTwo').click(function() {
        totalScore = totalScore + crystalButton2;
        console.log(totalScore + crystalButton2);
                $('#finalTotal').text(totalScore); 
                 //win operation
                 if (totalScore == mainTotal){
                      success();
                 }
                //lose operation
                else if (totalScore > mainTotal){
                    fail();
        }
    $('#buttonThree').click(function() {
        totalScore = totalScore + crystalButton3;
        console.log();
              $('#finalTotal').text(totalScore); 
              //win operation
            if (();
            }
            //lose operation
            else if (();
            }
    
    $('#buttonFour').click(function() {
        totalScore = totalScore + crystalButton4;
        console.log();
        
              $('#finalTotal').text(totalScore); 
              //win operation
            if (
            }
            //lose operation
            else if ();
            }}