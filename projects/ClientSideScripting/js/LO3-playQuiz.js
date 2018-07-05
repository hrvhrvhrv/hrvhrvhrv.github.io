// playQuiz.js function 


// Define user name as a vairable from the local storage 

var userName = localStorage.getItem("pupilName");


document.getElementById("calcTri").addEventListener('click', function () { 
	var p1 = document.getElementById("num1").value; 
	var p2 = document.getElementById("num2").value; 
	var p3 = document.getElementById("num3").value; 
	calTriangle(p1, p2, p3); 
});

function calTriangle(ss1, ss2, ls1) { //calTriangle function is declared and variables decalred as ss1, ss2 and ss3.  'p1' becomes 'ss1', 'p2' becomes 'ss2' and 'p3' becomes 'ls1'
	var answer1 = parseInt(ss1) * parseInt(ss1) + parseInt(ss2) * parseInt(ss2); // var answer1 is declared as a calculation. 'parseInt' tells javascript that the variable is a number.  The calculation is short side 1 times short side times 1 plus short side 2 times short side 2 
	
	if (answer1 === parseInt(ls1) * parseInt(ls1)) { //if statement checks if 'var answer1' is equal to and of the same type as the following calculation 'ls1' times 'ls1'
		document.getElementById("outputAnswer").innerHTML = "Yes this is a right angled Triangle"; //if the values match the string "Yes..." is passed to the div with id="outputAnswer" 
	}
	else {
		document.getElementById("outputAnswer").innerHTML = "No this is not a right angled Triangle"; //if the values dont match the string "No..." is passed to the div with id="outputAnswer"
	}
	
}
var score = 0;  //Global variable 'score' is defined as zero

document.getElementById("Quiz").addEventListener("click", function () { 
	q1(); //calls function q1 
	q2(); //calls function q2
});
//question 1
function q1() { //function declared as q1
	var q1tries = 0; //local variable 'q1tries' is defined as 0.  This tracks how many attempts the user takes at q1
	var q1answer = window.prompt("What is 23745 to the nearest thousand?"); //local variable 'q1answer' is defined by user.  A pop up window will ask the user to input an answer to "What is 23745 to the nearest thousand?"
	if (q1answer === "24000") { //an if else statement is used to determine if the user has put in a value that is equal to and the same type as "24000".  
		window.alert("Correct " ); //if correct then a pop up window tells the user they are correct 
		score++; //the value of 1 is added to the global variable 'score'.  If correct this would exit the if else statement and the user would recieve an aditional pop up telling them their name and what their score is and move on two the second called function 'q2'
	}
	else { 
		while (q1tries < 1 && q1answer !== "24000") { // while the number of attempts at q1 is less than 1 and the answer given does not match "24000" the following function is preformed.  if the value of 'q1tries' is equal to or greater than 1 then the else statement below comes into play
			q1answer = window.prompt("This is not correct.  Please try again: What is 23745 to the nearest thousand?"); // a window pops up and tells the user they are not correct and asks them to try again
			q1tries++; // the value of 1 is added to the local 'q1tries' variable
			if (q1answer === "24000") { //an if else statement is used to determine if the user has put in a value that is equal to and the same type as "24000". 
				window.alert("Correct"); //if correct then a pop up window tells the user they are correct 
				score++; //the value of 1 is added to the global variable 'score' 
			}
			else {
				window.alert(userName + " you have had two failed attempts at this question please move onto the next question."); //if the value of 'q1tries' is equal to or greater than 1, this is done by getting the answer wrong twice, a pop up tellin the user that they have failed twice and to move onto the next question
			}
		}// while statement
	}//else statement ends here
	alert(userName + " score = " + score); //a pop up window then tells the user their current score, which is the value of 'var score'
}
//question 2
function q2() { //if correct then a pop up window tells the user they are correct 
	var q2tries = 0; //local variable 'q2tries' is defined as 0.  This tracks how many attempts the user takes at q2
	var q2answer = window.prompt("What is 40% of £50? Use the £ sign in your answer"); //local variable 'q1answer' is defined by user.  A pop up window will ask the user to input an answer to "What is 23745 to the nearest thousand?"
	if (q2answer === "£20") {  //an if else statement is used to determine if the user has put in a value that is equal to and the same type as "24000".  
		window.alert("Correct"); //if correct then a pop up window tells the user they are correct 
		score++;  //the value of 1 is added to the global variable 'score'
	}
	else {
		while (q2tries < 1 && q2answer !== "£20") {  // while the number of attempts at q1 is less than 1 and the answer given does not match "£20" the following function is preformed.  if the value of 'q2tries' is equal to or greater than 1 then the else statement below comes into play
			q2answer = window.prompt("This is not correct.  Please try again: What is 40% of £50? Use the £ sign in your answer"); // a window pops up and tells the user they are not correct and asks them to try again
			q2tries++; // the value of 1 is added to the local 'q2tries' variable
			if (q2answer === "£20") {
				window.alert("Correct"); //if correct then a pop up window tells the user they are correct 
				score++; //the value of 1 is added to the global variable 'score'
			}
			else {
				window.alert(userName + " you have had two attempts and not answerred correctly.  End of quiz"); //if the value of 'q2tries' is equal to or greater than 1, this is done by getting the answer wrong twice, a pop up tellin the user that they have failed twice and the quiz is finished
			}
		} // while statement
	} //else statement ends here
	alert("Score = " + score); //a pop up window then tells the user their current score, which is the value of 'var score'
	document.getElementById("score").innerHTML = score;;  //takes 'var score' and passes this information to div with id="score" which displays the score variable
}