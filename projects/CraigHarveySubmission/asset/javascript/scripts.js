/*
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Global Variable declarations
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
var welcome = document.getElementById("welcome_message"),
    form = document.getElementById("welcome_form"),
    errorLogName = document.getElementById("errorLog_useName"),
    errorLogLocation = document.getElementById("errorLog_location"),
    welcomeToggle = document.getElementById("welcome_toggle");


/*
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// functions
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

//  validate form function checks the value of both form inputs
//  if inputs are empty the page displays an alert telling the user telling them where they went wrong
function validateForm() {
    errorLogName.innerHTML= "";
    errorLogLocation.innerHTML= "";
    var userName = document.forms["userDetails"]["userName"].value;
    var postCode = document.forms["userDetails"]["location"].value;

    if (userName === "" && postCode === "" ) {
        errorLogName.innerHTML= "Please enter a name";
        errorLogLocation.innerHTML= "Please enter a postcode";
        return false;
    }
    if (userName === "") {
        // alert("You must enter a name");
        errorLogName.innerHTML= "Please enter a name";
        return false;
    }
    if (postCode === "") {
        errorLogLocation.innerHTML= "Please enter a postcode";
        // alert("You must enter a postcode");
        return false;
    }
}


/*
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Event listeners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

//this event listener responds to a click on the
welcomeToggle.addEventListener("click", function () {
    form.style.display = 'flex';
    welcome.style.display = 'none';

}, false);