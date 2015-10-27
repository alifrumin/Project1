$(document).ready(function(){
  i=0;

  //Array of Color Objects
  colorPrompts = [
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
  $(".hintDisplay").html(colorPrompts[i].hint)
  console.log(colorPrompts[i]);

  //iterate through array
  function next(i){
  $("#colorBox").css("background", colorPrompts[i].colorBoxColor)
  $(".hintDisplay").html(colorPrompts[i].hint)
  }

  //Length of Question Array for Number of Questions
  $("#totalQuestions").append(colorPrompts.length);

  //check answer on submit
  $(".submit").on("click", function(){
    if
    (($(".answer").val()) === (colorPrompts[i].colorBoxColor))
    {console.log(colorPrompts[i].colorBoxColor);
    i++;
    next(i);
    //+1 to #correctQuestions
    //+1 to #answeredQuestions
    }
    else
    // (($(".answer").val()) !== (colorPrompts[i].colorBoxColor))
    {console.log("incorrect, try the Hint!");
    //+1 to #answeredQuestions
    //move to next item in Array
    }
  });

  //Display Hint when Hint Button Clicked
  $(".hintButton").on("click", function(){
    $(".hintDisplay").toggle()
  });

  //Skip button
  $(".skip").on("click", function(){
    i++;
    next(i);
  });

});
