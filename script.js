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
      hint:"Like the fish",
      }
  ];
  //start
  $("#colorBox").css("background", colorPrompts[i].colorBoxColor)
  $(".hintDisplay").html(colorPrompts[i].hint)
  console.log(colorPrompts[i]);

  function next(i){
  $("#colorBox").css("background", colorPrompts[i].colorBoxColor)
  $(".hintDisplay").html(colorPrompts[i].hint)
  }
  // // next item in Array
  // function next(i){
  //   $("#colorBox").css("background", this.colorBoxColor);
  //   $(".hintDisplay").html("<p>"+this.hint+"</p>");
  //   i++;
  // }

  //Length of Question Array for Number of Questions
  $("#totalQuestions").append(colorPrompts.length);

  //check answer
  $(".submit").on("click", function(){
    if
    (($(".answer").val()) === (colorPrompts[i].colorBoxColor))
    {console.log(colorPrompts[i].colorBoxColor);
    i++;
    next(i);
    // next();
    // console.log(i);
    // next();
      // for (var i = 0; i < colorPrompts.length; i++) {
      //   colorPrompts[i]
      // };
    //move to next item in Array
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
});
