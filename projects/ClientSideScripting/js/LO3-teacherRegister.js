//JavaScript File
/* ***** Welcome Function ****** 
Var name gets the teachName from local storage which is then out put into the page as the inner HTML of teachOut
*/
var name = localStorage.getItem("teachName");
document.getElementById("teachOut").innerHTML = "Welcome to the results register " + name;


/* ***** Register function *****
variables kidName and kidScore are defined as blank arrays
variable  kidTotal is defined as the value of the element with Id kidNum .  This allows the teacher to define the number of pupils in the class and defines how many times the array funtion is ran.
for statement loop is defined with the statements of var i = 1, if the var i is less than or equal to the variable kidTotal then exicute the code below then add 1 to the value of i.
the arrays are then defined by asking the user via a prompt name to enter the pupils name then the pupils score. 
Once this has looped for the value of kidTotal the values of the arrays are fed into a table displaying the pupil number, name and score on the same table row.

*/
function register() {
    var kidName = [];
    var kidScore = [];
    var kidTotal = document.getElementById("kidNum").value;
    for (var i = 1; i <= kidTotal; i++) {
        kidName[i] = prompt("Please enter the name of pupil number " + i);
        kidScore[i] = prompt("Please enter the score of pupil number " + i);
        document.getElementById("outPut").innerHTML += "<tr><td>" + i + "</td><td>" + kidName[i] + "</td><td>" + kidScore[i] + "</td></tr>";
    }
}


/* ***** Event Listener - start button ***** 
Upon click the even listener calls the register function.  
*/
document.getElementById("start").addEventListener("click", register, false);


/*  ***** Event Listener - home button ***** 
    - On click of the home button the local storage is cleared so that no information has been left when returning to index.html
*/
document.getElementById("fixedbutton").addEventListener("click", function () {
    if (window.localStorage) {
        localStorage.clear();
    }
});