//JavaScript File

/*	*****Welcome Function *****
-	Var pupilName gets the pupilName from local storage which is then out put into the page as the inner HTML of pupOut
*/
var pupilName = localStorage.getItem("pupilName");
document.getElementById("pupOut").innerHTML = "Welcome " + pupilName + ".  Please complete the math tasks below";


/*	***** Calculator Function *****
-	Event listeners below trigger the calculator function.  
-	The function has three parameters : num1, num2 and opp.
-	The arguments for the parameters are defined by the event listener.
-	An If Else conditional statement test the value of the 'opp' parameter argument.   
-	It then performs the defined 'opp' calculator sum and produces an out put to the page showing the sume performed and the answer in different output divs.
*/
function calculator(num1, num2, opp) {
    var intOutput;
    if (opp === "add") {
        intOutput = parseInt(num1) + parseInt(num2);
        document.getElementById("calcQuest").innerHTML = num1 + "  plus  " + num2 + " = ";
        document.getElementById("calcOut").innerHTML = intOutput;
    }
    else if (opp === "sub") {
        intOutput = parseInt(num1) - parseInt(num2);
        document.getElementById("calcQuest").innerHTML = num1 + "  minus  " + num2 + " = ";
        document.getElementById("calcOut").innerHTML = intOutput;
    }
    else if (opp === "mult") {
        intOutput = parseInt(num1) * parseInt(num2);
        document.getElementById("calcQuest").innerHTML = num1 + "  multiplied by  " + num2 + " = ";
        document.getElementById("calcOut").innerHTML = intOutput;
    }
    else if (opp === "div") {
        intOutput = parseInt(num1) / parseInt(num2);
        document.getElementById("calcQuest").innerHTML = num1 + "  divided  by  " + num2 + " = ";
        document.getElementById("calcOut").innerHTML = intOutput;
    }
}


/*	***** Input validation ***** 
-	This function checks that a numeric value has been used in the calculator task
-	x, y and text are set as variables.
-	x and y are defined by getting the value from the elements with Id number1 and number 2.
-	text is defined by checking to see if x or y are Nan (not a number).
-	An if else conditional statement checks to see if either x or y are NaN the user is fed a message on the page requesting them to ensure a number is put in both input boxes.
*/
function valaidateInput() {
    var x, y, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("number1").value;
    y = document.getElementById("number2").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || isNaN(y)) {
        text = "<h2>Ensure you have entered a number in both boxes</h3>";
    }
    else {
        text = "";
    }
    document.getElementById("demo").innerHTML = text;
}


/*	****** Event Listeners ***** 
-	four seperate event listeners are defined, one for each calculator function / button.
-	Upon click the even listener calls two functions.  
-	the first is an empty function which defines 3 parameters / arguments, num1, num2 and opp,  for the calculator function.
-	It defines num1 and 2 by getting the value from input elements with Id number1 and number 2.    
-	Opp is defined by a string which relates to the calculator function.
-	The second function call is for valaidateInput which checks that numeric values have been input.
*/
document.getElementById("add").addEventListener("click", function () {
    calculator(document.getElementById("number1").value, document.getElementById("number2").value, "add");
    valaidateInput();
});
document.getElementById("subtract").addEventListener("click", function () {
    calculator(document.getElementById("number1").value, document.getElementById("number2").value, "sub");
    valaidateInput();
});
document.getElementById("multiply").addEventListener("click", function () {
    calculator(document.getElementById("number1").value, document.getElementById("number2").value, "mult");
    valaidateInput();
});
document.getElementById("divide").addEventListener("click", function () {
    calculator(document.getElementById("number1").value, document.getElementById("number2").value, "div");
    valaidateInput();
});


/*  ***** Event Listener ***** 
-	On click of the home button the local storage is cleared so that no information has been left when returning to the page
*/
document.getElementById("fixedbutton").addEventListener("click", function () {
    if (window.localStorage) {
        localStorage.clear();
    }
});