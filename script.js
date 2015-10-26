$(document).ready(function(){
  console.log($("#colorBox").css("background"));
  //Array of Question Objects
  colorPrompts = [burlywood, salmon];

  //Length of Question Array for Number of Questions
  $("#totalQuestions").append(colorPrompts.length);

  //check answer
  $(".submit").on("click", function(){
    if
    (($(".answer").val()) == ($("#colorBox").css("background")))
    {console.log("correct")}
    if
    (($(".answer").val()) !== ($("#colorBox").css("background")))
    {console.log("incorrect, try the Hint!")}
  });

  //Display Hint when Hint Button Clicked
  $(".hintButton").on("click", function(){
    $(".hintDisplay").toggle()
  });

  //Questions Objects
  var burlywood = {
    colorBoxColor:"burlywood",
    hint:"Rhymes with Twirly Hood",
  };

  var salmon = {
    colorBoxColor:"salmon",
    hint:"Like the fish",
  };

});
