// JavaScript Document

var slideIndex = 1; //Sets a variable called slideIndex to a value of 1
function carousel() { //Names a function called carousel
	"use strict"; //Prevent any undeclared variable from being used. Newer addition to JS
	
	//Sets a counting variable of i as a control for the carousel
	var i;
	//Sets a variable of x with a value equal to all of the elements with the class "slides"
	var x = document.getElementsByClassName("carousel");
	//For each occurance of i that is 0, or less than the length of the array(x), increase i by 1 and hide all members of the array by setting display to none
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++; //Increase the slideIndex value by 1
	if (slideIndex > x.length) { slideIndex = 1;  //If the slideIndex value is greater than the number of values in the array (x), reset slideIndex to 1
	}
	x[slideIndex-1].style.display="block"; //Display the image in the array equal to slideIndex-1 by setting display to block for that value in the array
	setTimeout(carousel,5000); //change image every 5 seconds
} 

carousel(); //Call the carousel function