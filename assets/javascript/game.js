$( document ).ready(function(){
    // This Generates random number to guess
   
    
    // This will Display random number
    
    
    //This will Generate random number for each Turtle
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    //These are Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  //This will Reset game
  function reset(){
       
  // This will Display wins
  function (){
  alert("");
   
  // This will Display losses
  function (){
  alert ();
   
  }
  // Clicking on Turtles
    $('.red').on ('click', function(){
      
    $('.blue').on ('click', function(){
      
    $('.orange').on ('click', function(){
      
    $('.purple').on ('click', function(){
     
 