Self-scoring Trivia... guess Html color s

Technologies used: I set up trivia using jquery and javascript

Approach: I created an array of objects. The Objects consist of colors and hints the user can iterate thru the array using skip, hint and submit button. I created a circle called ColorBox that displays the first color object. One can:
 Skip: If one skips it goes to the next object in the array,
 Hint: if one presses the hint button it displays the hint for the color object.
 Submit:If one inputs the correct answer and presses submit it moves to the next item in the array and logs 1 correct out of the length of the array in your score. If one hits submit and the input does not match the value it displays incorrect.
When you get to the end of the array it displays a this is the end message. It tracks your score as you go and accurately displays how many you got right out of the total number in the array.

Installation Instructions: I got it up on github pages so one can visit it there.

Unsolved Problems:
1. I created an array of objects but because I only have two things in the array and one of them is the same as the  of the Array its not super dry... but I wanted to experiment with the objects in an array concept and theoretically I could add other things to them
2. Im working on some animation... of the text that it doesn't just pop up on the page.
3. I want to an error message for when nothing is entered into the text box which is different from when it is wrong.


User Stories:
1. As a user I should be able to input my answer so that the computer can tell me if I am right
2. As a user I should be able to see how many questions I have gotten right so that I know how I am doing
3. As a user I should be able to see how many questions there are so that I can know how much there is left
4. As a user I should be able to ask for a hint so that I can better guess if I am struggling
5. As a user I should be able to skip questions so that I can move on to the next question
