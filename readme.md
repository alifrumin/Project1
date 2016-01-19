CSS3 Color Keyword Quiz
=======================

Technologies used:
------------------
* JavaScript
* JQuery
* GitHub pages
* CSS and HTML
* Git

Approach:
---------
I created an array of objects. Each color object is named as the CSS3 color keyword and has a hint and a ColorBoxColor property.  

*Users can:*  
 ** Skip:** If one skips it goes to the next object in the array. Nothing is added to the score.  
 ** Hint:** if one presses the hint button the hint for the color object is appended to the dom.  
 ** Submit:** If one inputs the correct answer into the text box and clicks the submit button or hits the enter key it moves to the next item in the array and logs 1 correct. If one hits submit and the input does not match the value of the ColorBox Color an incorrect message is appended to the dom.  
 ** Restart:** If you click the Restart Button the game is set back to 0 correct and the first color in the array.   

When one gets to the end of the array it displays a this is the end message. It tracks your score as you go and accurately displays how many you got right out of the total number in the array.

Things to Do:
------------------
1. Rework the code so that the color is not duplicated. Currently the color is both the name of the object and a property of the object.
2. Animate the text so that it doesn't just pop up on the page.
3. Add an error message for when nothing is entered into the text box which is different from when it is wrong ex: "Text Box is empty, please enter your guess into the text box".


User Stories:
-------------
1. As a user I should be able to input my answer so that the computer can tell me if I am right
2. As a user I should be able to see how many questions I have gotten right so that I know how I am doing
3. As a user I should be able to see how many questions there are so that I can know how much there is left
4. As a user I should be able to ask for a hint so that I can better guess if I am struggling
5. As a user I should be able to skip questions so that I can move on to the next question
