Self-scoring Trivia... guess Html color names

Technologies used: I set up trivia using jquery and javascript

Approach: I created an array of objects. The Objects consist of colors and hints the user can iterate thru the array using skip, hint and submit button. I created a circle called ColorBox that displays the first color object. One can:
 Skip: If one skips it goes to the next object in the array,
 Hint: if one presses the hint button it displays the hint for the color object.
 Submit:If one inputs the correct answer and presses submit it moves to the next item in the array and logs 1 correct out of the length of the array in your score. If one hits submit and the input does not match the value it displays incorrect.
When you get to the end of the array it displays a this is the end message. It tracks your score as you go and accurately displays how many you got right out of the total number in the array.

Installation Instructions: I got it up on github pages so one can visit it there.

Unsolved Problems:
1. it only works when you answer in all lowercase... Im working on making it to you can use different capitalization
2. I created space for the hint so that the formatting doesn't change when you display the hint but haven't got it to work for the help.
3. Im working on some animation... of the text that it doesn't just pop up on the page. 

User Stories:
1. As a user I should be able to input my answer so that the computer can tell me if I am right
2. As a user I should be able to see how many questions I have gotten right so that I know how I am doing
3. As a user I should be able to see how many questions there are so that I can know how much there is left
4. As a user I should be able to ask for a hint so that I can better guess if I am struggling
5. As a user I should be able to skip questions so that I can move on to the next question
