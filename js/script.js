function updateTime() {
    var date = new Date();
    var s = ("0" + date.getSeconds()).slice(-2);
    var m = ("0" + date.getMinutes()).slice(-2);
    var h = ("0" + date.getHours()).slice(-2);
    var clr = "#" + h + m + s;
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("bdy").style.backgroundColor = clr;
    document.getElementById("hex").innerHTML = clr;
}
setInterval(updateTime, 1000);