var output = "";

var I = 0.0575;
var LoanAmount = parseFloat(prompt("Enter the loan amount:",0));
var NumOfYears = parseInt(prompt("Enter the term years:",0));

var MortgageLoanBalance;
var MonthlyPayment;

MonthlyPayment = (((I / 12) * LoanAmount) / (1- (Math.pow (1 + (I / 12), (NumOfYears * -12))))).toFixed(2);
var TotalInterestAmount = MonthlyPayment * (NumOfYears * 12) - LoanAmount;
var TotalLoan = LoanAmount + TotalInterestAmount;
MortgageLoanBalance = TotalLoan - MonthlyPayment;

if (MortgageLoanBalance > 0 ) {
    document.write("Your " + NumOfYears + " year mortgage amount is " + MonthlyPayment + " per month." );

    document.writeln(TotalInterestAmount);
    document.writeln(TotalLoan);
    document.writeln(MortgageLoanBalance);

    for (i = 0; i <= MonthlyPayment; i++) {
        document.write("Month " + i + ": Your Monthly Payment " + MonthlyPayment + " and Mortgage loan balance " + MortgageLoanBalance + "<br>");
    }
} else {
    document.write("You have no payments");  
}
var reset = document.getElementById(reset).value = reset;

document.getElementById("out").innerHTML = output;


