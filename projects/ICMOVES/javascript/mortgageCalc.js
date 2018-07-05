//mortgage caluclator JS

var btnCal = document.getElementById("caluclatorBTN");

function calculateLoan(){
var monthlyInterestRate = 1+((document.getElementById("interRat").value) / 12);
var totalNumofPayments = (document.getElementById("loPer").value) * 12,
 	loanAmount = (document.getElementById("propValue").value) - (document.getElementById("depoVal").value),
	monthlyPayment;
	monthlyPayment = ( loanAmount /totalNumofPayments  ) * monthlyInterestRate;
	document.getElementById("monthlyOutput").innerHTML = "£ " +  Math.round(monthlyPayment) + " per month";
	document.getElementById("borrowOutput").innerHTML = "£ " + loanAmount;
}
											  
btnCal.addEventListener("click", function(){
    calculateLoan();
});