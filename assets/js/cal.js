var amount = document.getElementById("amount");
var aoutput = document.getElementById("amountoutput");
//Show output to the user
aoutput.innerHTML='ZMW '+amount.value;
//Update amount If scrolled
amount.oninput = function() {
  aoutput.innerHTML ='ZMW '+this.value;
  aoutput.value=this.value;
  
  }

var period = document.getElementById("period");
var poutput = document.getElementById("periodoutput");
//Show output to the user
poutput.innerHTML=period.value +' Months';
//Update period If scrolled
period.oninput = function() {
  poutput.innerHTML =this.value +' Months';
  poutput.value=this.value;
  
 }

 //Insert some starting figures on page load
 //On page load set the starting amount as 500 and period as 6 months
 window.onload=function(){
//Amount 500 set on pageload
  aoutput.value=500;
  //Period 6 months set on page load  
  poutput.value=6;
}


//If calculate button is clicked, start the calculations  
function loanAnalysis(){
  

//Start Calculations


//Loan amount 
var l = parseFloat(document.getElementById('amountoutput').value);

//Processing fee of K130
var proc = parseFloat(130);

//Total Loan amount will be the loan amount plus the processing fee amount
var p = parseFloat(l + proc);

//Loan Interest rate per month, not per year but per month
var r = 0.15; 

//Number of periods of repaying the loan in months
var n = parseFloat(document.getElementById('periodoutput').value);

//Loan Monthly payments formular and results
var f =  p *(r*Math.pow((1 + r),n)) / (Math.pow((1 + r),n-1));

//To two decimal places monthly payments
var a = f.toFixed(2); 


//Total Payments
var total = a * n;

//To two decimal places final pay
var finalPay = total.toFixed(2); 



//Display this on Calculated results for the client to see

//Monthly payments
document.getElementById('monthly').innerHTML = a;

 // Total payments to be made
 document.getElementById('total').innerHTML = finalPay;



}



