function updateTime() {
    var date = new Date();
    var s = ("0" + date.getSeconds()).slice(-2);
    var m = ("0" + date.getMinutes()).slice(-2);
    var h = ("0" + date.getHours()).slice(-2);
    var clr = "#" + h + m + s;
    document.getElementById("clock").innerText = h + ":" + m + ":" + s;
}
setInterval(updateTime, 1000);

  function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
  }
var slider_img = document.querySelector('.slider_img');
var image = ['jordan1.jpg', 'jordan2.jpg', 'jordan3.jpg', 'jordan4.jpg', 'jordan5.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = image.length;
	i--;
	return setImg();
}

function next(){
	if(i >= image.length -1) i = -1;
	i++;
	return setImg();
}

function setImg(){
	return slider_img.setAttribute("src", "image/"+image[i]);
}