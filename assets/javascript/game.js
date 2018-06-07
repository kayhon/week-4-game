$( document ).ready(function(){
    // This Generates random number to guess
    var turtCalc=Math.floor(Math.random()*101+19)
    // This will Display random number
    $('#orderToMatch').text(turtCalc);
    //This will Generate random number for each Turtle
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    //These are Variables to keep track of wins, losses and total
    var Score= 0; 
    var wins= 0;
    var losses = 0;
  $('#wins').text(wins);
  $('#losses').text(losses);
  //This will Reset game
  function reset(){
        turtCalc=Math.floor(Math.random()*103+19);
        console.log(turtCalc)
        $('#orderToMatch').text(turtCalc);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        Score= 0;
        $('#totalScore').text(Score);
        } 
  // This Displays wins
  function win(){
  alert("Congrats its PIZZA TIME! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // This Displays losses
  function loser(){
  alert ("Sorry! Bummer Dude no pizza time! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking on Turtles
    $('.red').on ('click', function(){
      Score = Score + num1;
      console.log("New Score= " + Score);
      $('#totalScore').text(Score); 
            //These are Win & lose conditions
      if (Score == turtCalc){
           win();
          }
      else if ( Score > turtCalc){
           loser();
          }   
    })  
    $('.blue').on ('click', function(){
      Score = Score + num2;
      console.log("New Score= " + Score);
      $('#totalScore').text(Score); 
      if (Score == turtCalc){
           win();
          }
      else if ( Score > turtCalc){
           loser();
          } 
    })  
    $('.orange').on ('click', function(){
    Score = Score + num3;
    console.log("New Score= " + Score);
    $('#totalScore').text(Score);  
     if (Score == turtCalc){
           win();
          }
     else if ( Score > turtCalc){
           loser();
          } 
    })  
  $('.purple').on ('click', function(){
  Score = Score + num4;
  console.log("New Score= " + Score);
  $('#totalScore').text(Score);     
    if (Score == turtCalc){
         win();
          }
    else if ( Score > turtCalc){
         loser();
          }
    });   
  }); 