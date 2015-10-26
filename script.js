$(document).ready(function(){

  //Array of Question Objects
  colorPrompts = [burlywood, salmon];

  //Length of Question Array for Number of Questions
  $("#totalQuestions").append(colorPrompts.length);
  
  //check answer
  $(".submit").on("click", function(){
    if
    (($(".answer").val()) == "orange")
    {console.log("correct")}
    if
    (($(".answer").val()) !== "orange")
    {console.log("incorrect, try the Hint!")}
  });
  //Display Hint when Hint Button Clicked
  $(".hintButton").on("click", function(){
    $(".hintDisplay").toggle()
  });
//Questions Objects
  var burlywood = {
    colorBox:"burlywood",
    hint:"Rhymes with Twirly Hood",
  };
  var salmon = {
    colorBox:"salmon",
    hint:"Like the fish",
  };
});
