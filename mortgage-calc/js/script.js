function reset() {
var M = Number(document.getElementById("M").value = "");
var P = Number(document.getElementById("P").value = "");
var N = Number(document.getElementById("N").value = "");
var R = Number(document.getElementById("R").value = "");
var T = Number(document.getElementById("T").value = "");
}
function calc() {
  var M = Number(document.getElementById("M").value);
  var P = Number(document.getElementById("P").value);
  var R = Number(document.getElementById("R").value);
  var T = Number(document.getElementById("T").value);
  var N = 12;
  var B = (P*(1 + (R/N))**(N*T)) - ((M*((1 + (R/N))**(N*T)-1))/(R/N));
  var out = document.getElementById("out");
  out.innerText="$" + B.toFixed(2);
}

