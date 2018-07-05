/*  ***** Login name  *****
-	function login is defined with parameters page, key and input, which were passed as an arguemetns fromt the event listeners below.
-	local variable user is defined by getting the value of the element with the ID of the input paramater
- 	the function uses an if else statement to check to see that the user has enetered a value in to user name input
-	if user has no value 
		-	an alert pops up asking the user to enter a name
-	if user has a value
		-	the function redirects the user to the html page defined by the page paramater 
		-	it then sets the value of local storage key set as key paramater and the value set as local user variable

*/
function login(page, key, input) {
    var user = document.getElementById(input).value;
    if (user === "") {
        window.alert("Please enter your name");
    }
    else {
        window.location.href = page;
        localStorage.setItem(key, user);
    }
}


/* 	***** Password Validation *****
-	function password is defined with paramater pword, which is passed as an argument from the eventlistener below.
-	the function uses an if else function to check if the value of pword is equal to password
- 	if the value of pword is equal to password
		-	the function re-directs the user to teacher.html
		-	local variable user is defined by the value of the teachName input box.
		-	var user is set as the value of the teachName key.
-	if the value of password is not equal to password
		-	the function displays an alert window telling the user the password is incorrect please try again
*/
function password(pword) {
    if (pword === "password") {
        window.location.href = "teacher.html";
        var user = document.getElementById("teachName").value;
        localStorage.setItem("teachName", user);
    }
    else {
        window.alert("Password is incorrect.  Please try again");
    }
}


/*	***** Event listner - password *****
    -  on click of elements with loginTeach ID's function password is called with value of the password input box passed as an argument.
*/
document.getElementById("loginTeach").addEventListener("click", function () {
    password(document.getElementById("teapassword").value);
});


/*  ***** Event Listerner - User name pupil + parent *****
	- on click of elements with loginPup and loginParent ID's function login is called with three arguements passed to the funciton.
	- the arguements are for what page to go to, the key for local storage and what element id to get the username from.
*/

document.getElementById("loginPup").addEventListener("click", function () {
    login("pupil.html", "pupilName", "username");
});
document.getElementById("loginParent").addEventListener("click", function () {
    login("parent.html", "parName", "parentName");
});