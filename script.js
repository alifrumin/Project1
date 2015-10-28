$(document).ready(function(){
  i=0;
  correct=0;

  //Array of Color Objects
  colorPrompts = [
    red = {
      colorBoxColor: "green",
      hint: "red light, ___ light (means go when driving)"
      },
    lemonchiffon = {
      colorBoxColor: "lemonchiffon",
      hint: "citrus fruit + fabric"
      },
    burlywood = {
      colorBoxColor:"burlywood",
      hint:"Rhymes with Twirly Hood"
      },
    salmon = {
      colorBoxColor:"salmon",
      hint:"Like the fish"
      },
    tomato = {
      colorBoxColor:"tomato",
      hint:"often used to make pasta sauce"
      },
    thistle = {
      colorBoxColor:"thistle",
      hint:"___ and Thyme"
      },
    lawngreen = {
      colorBoxColor:"lawngreen",
      hint:"front ___ + color"
      },
    dodgerblue = {
      colorBoxColor:"dodgerblue",
      hint:"LA baseball team + color"
      },
    ghostwhite = {
      colorBoxColor:"ghostwhite",
      hint:"pale as a ghost"
      },
    gainsboro = {
      colorBoxColor:"gainsboro",
      hint:"gainsboro"
    }
  ];

  //start
  $("#colorBox").css("background", colorPrompts[i].colorBoxColor)
  $(".hintDisplay").html("<p>Hint: " + colorPrompts[i].hint + "</p>")
  console.log(colorPrompts[i]);

  //iterate through array
  function next(i){
    if (i < colorPrompts.length){
  $("#colorBox").css("background", colorPrompts[i].colorBoxColor);
  $(".hintDisplay").html("<p>Hint: " + colorPrompts[i].hint + "</p>");
}
    //when one gets to the end of the Quiz
    if (i >= colorPrompts.length){
      $("#colorBox").html("<p>You have reached the end of the Quiz!</p>");
      $("#colorBox").css("background", "black");
    }
  };

  //Length of Question Array for Number of Questions
  $("#totalQuestions").append(" of " + colorPrompts.length);

  //check answer on submit
  $(".submit").on("click", function(){
    if
    ((($(".answer").val()).toLowerCase()) === (colorPrompts[i].colorBoxColor))
    {console.log(colorPrompts[i].colorBoxColor);
    i++;
    next(i);
    $(".hintDisplay").hide();
    correct++;
    $("#answeredQuestions").html("<h4>Correct: </h4>" + correct);
    $(".answer").val("");
    $(".helpDisplay").html("");
    }
    else
    {console.log("incorrect, try the Hint!");
    $(".helpDisplay").html("<p>Incorrect :( try again, remember no spaces and use the hint.</p>");
    }
  });

  //Display Hint when Hint Button Clicked
  $(".hintButton").on("click", function(){
    $(".hintDisplay").show();
  });

  //Skip button
  $(".skip").on("click", function(){
    i++;
    next(i);
    $(".hintDisplay").hide();
    $(".answer").val("");
    $(".helpDisplay").html("");
  });
});
