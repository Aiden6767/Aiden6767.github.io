function reset() {
  document.getElementById("prin").value = "";
  document.getElementById("int").value = "";
  document.getElementById("noy").value = "";
  document.getElementById("monp").value = "";
  document.getElementById("nom").value = "";
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