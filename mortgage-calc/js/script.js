function reset() {
  document.getElementById("12").value = "";
  document.getElementById("m").value = "";
  document.getElementById("t").value = "";
  document.getElementById("p").value = "";
  document.getElementById("b").value = "";
  document.getElementById("out").innerHTML = "";
}
function getRemainder() {
  var b = p (1 + r/12)**12 / t - m (1 + r/12)**12 / t - 1 / (1 + r/12);

}
function calc() {
  var remainder = Number(document.getElementById("rem").value);
  var principal = Number(document.getElementById("prin").value);
  var interestrate = Number(document.getElementById("int").value);
  var b = p * (1 + r/12)**12 / t - m * (1 + r/12)**12 / t - 1 / (1 + r/12);
  document.getElementById("out").innerHTML = "Remainder: " + remainder + "<br/>interestrate: " + r;
}
var nom = 12;
var monp = m;
var noy = t;
var int = r;
var prin = p;
var remainder = b;
