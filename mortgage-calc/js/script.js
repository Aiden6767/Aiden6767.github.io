function reset() {
var M = Number(document.getElementById("M").value);
var N = Number(document.getElementById("N ").value);
var P = Number(document.getElementById("P").value);
var O = Number(document.getElementById("O").value);
var R = Number(document.getElementById("R").value);
}
function calc() {
  var M = Number(document.getElementById("rem").value);
  var P = Number(document.getElementById("prin").value);
  var N = Number(document.getElementById("int").value);
  var O = 12;
  var B = (P*(1 + (R/12))**(12*T)) - ((M*((1 + (R/12))**(12*T)-1))/(R/12));
  var out = document.getElementById("out");
  out.innerText="$" + B.toFixed(2);
}

