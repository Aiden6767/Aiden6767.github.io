function reset() {
  document.getElementById("12").value = "";
  document.getElementById("prin").value = "";
  document.getElementById("int").value = "";
  document.getElementById("noy").value = "";
  document.getElementById("monp").value = "";
  document.getElementById("out").innerHTML = "";
}
function calc() {
  var r = Number(document.getElementById("rem").value);
  var p = Number(document.getElementById("prin").value);
  var t = Number(document.getElementById("int").value);
  var t = Number(document.getElementById("int").value);
  var n = 12;
  var b = (p*(1 + (r/12))**(12*t)) - ((m*((1 + (r/12))**(12*t)-1))/(r/12));
  var out = document.getElementById("out");
  out.innerText="$" + b.toFixed(2);
}
var n = 12;
var monp = m;
var noy = t;
var int = r;
var prin = p;
var remainder = b;
