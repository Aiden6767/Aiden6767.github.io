var output = "";

function calculate_balance(PMT, IR, NP) {
    var PV = PMT * (1 - Math.pow(1 + IR, -NP)) / IR
    return round_decimals(PV, 2)
  }
  
  function round_decimals(original_number, decimals) {
    var result1 = original_number * Math.pow(10, decimals)
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return (result3)
  }
  
  var monthly_payment = 200
  var interest_rate = 0.09
  var term_remaining = 2
  var loan_balance = calculate_balance(monthly_payment, interest_rate / 12, 
            term_remaining * 12)
  
  alert("Monthly payment:\t$" + monthly_payment + "\n" +
     "Annual interest rate:\t" + interest_rate * 100 + "%\n" +
     "Term remaining:\t" + term_remaining + " years\n\n" +
     "Remaining balance:\t$" + loan_balance)
     return loan_balance = loan_balance={};

     

 


