//JavaScript File

// ***** Global Variables *****
var cost = 0;
var booklist = [];
var i = 0;


/* ***** Welcome Function ****** 
This function takes the username from index.html and displays it as a welcome message on parent.html
-	Var parent gets the parName from local storage which is then out put into the page as the inner HTML of parOut
*/
var parent = localStorage.getItem("parName");
document.getElementById("parOut").innerHTML = "Welcome " + parent;


/* ***** Price total function  *****
This fuction displays the total cost of all books clicked upon on partent.html
-	function bookTotal is definfed with the parameter of num1 passed from the event listener below
- 	global variable cost is defined in the function as the numeric value of global variable coast cost plus the numeric value of parameter num1
-	global variable cost is then passed to the inner html of element with id bookTotal
*/
function bookTotal(num1) {
    cost = parseInt(cost) + parseFloat(num1);
    document.getElementById("bookTotal").innerHTML = "<h2>£" + cost + "</h2";
}


/* ***** book list function *****
this function genertates an array of books clicked upon on partent.html, it also displays the number of books added to the array in realtime.
-	function bookList is defned with the parameter of name passed from the event listener below
-	global variable i is increminted by 1
-	global variable booklist array is set with value of i and each array item value is defined by the parameter of name
-	the inner html of element with id bookNum is defined as global variable i (this shows the number of books that have been clicked upon on the page before the list off books is called)
*/
function bookList(name) {
    i++;
    booklist[i] = name;
    document.getElementById("bookNum").innerHTML = "<h2>" + i + "</h2>";
}

/* 	***** showlist function ***** 
This function displays the list of books added to the total when the order button on parernt.html is clicked.
-	function show list is defined with no parameters
-	the innter html of element with id bookList is deinfed as booklist array

*/
function showlist() {
    document.getElementById("bookList").innerHTML = booklist.join(" ");
}


/*  ***** Event Listener - book purchase buttons ***** 
- 	On click of the puchase book buttons functions bookTotal and book list are called
-	bookTotal has arguemnt of the numeric vaule of each book item clicked.
-	bookList has argument of the string which will be added to the array.
*/
document.getElementById("addEnglish").addEventListener("click", function () {
    bookTotal(parseFloat(4.85));
    bookList("£4.85 Learning English <br>");
});
document.getElementById("addMath").addEventListener("click", function () {
    bookTotal(parseFloat(4.95));
    bookList("£4.95 Learning Math <br>");
});
document.getElementById("addComp").addEventListener("click", function () {
    bookTotal(parseFloat(6.00));
    bookList("£6.20 Learning Computing <br>");
});
document.getElementById("addSci").addEventListener("click", function () {
    bookTotal(parseFloat(8));
    bookList("£8.00 Learning Science <br>");
});
document.getElementById("addGeo").addEventListener("click", function () {
    bookTotal(parseFloat(6.75));
    bookList("£6.90 Learning Geography <br>");
});
document.getElementById("addHist").addEventListener("click", function () {
    bookTotal(parseFloat(7.50));
    bookList("£7.50 Learning History <br>");
});


/*  ***** Event Listener - order button ***** 
- 	On click of the home button the local storage is cleared so that no information has been left when returning to index.html
*/
document.getElementById("showList").addEventListener("click", function () {
    showlist();
});


/*  ***** Event Listener - home button ***** 
    - On click of the home button the local storage is cleared so that no information has been left when returning to index.html
*/
document.getElementById("fixedbutton").addEventListener("click", function () {
    if (window.localStorage) {
        localStorage.clear();
    }
});