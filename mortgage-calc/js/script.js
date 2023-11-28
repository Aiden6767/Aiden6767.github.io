var output = "";

const RemainingLoanBalance = document.getElementById("RemainingLoanBalance");
const Principal = document.getElementById("Principal");
const InterestRate = document.getElementById("InterestRate");
const NumberOfYears = document.getElementById("NumberOfYears");
const MonthlyPaymentAmount = document.getElementById("MonthlyPaymentAmount");
const MonthsPerYear = document.getElementById("MonthsPerYear");
const form = document.getElementById("MortgageCalc");

function calculateMortgage (loanAmount, InterestRate, MonthlyPaymentAmount) {
    function decimalToPercentage(decimal) {
        return decimal / 0.12 / 100;
    }
    interestRate = decimalToPercentage(interestRate);

    function yearsToMonths(year) {
        return year * 12;
    }

    NumberOfYears = yearsToMonths(NumberOfYears);

    let mortgage = (interestRate * loanAmount) / (1-Math**1 + interestRate, -NumberOfYears);

    return parseFloat(mortgage.toFixed(2));

}

form.onsubmit=(e)=>{
    e.preventDefault();

    let loanamount = 
}


 


