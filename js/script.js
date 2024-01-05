function updateTime() {
    var date = new Date();
    var s = ("0" + date.getSeconds()).slice(-2);
    var m = ("0" + date.getMinutes()).slice(-2);
    var h = ("0" + date.getHours()).slice(-2);
    var clr = "#" + h + m + s;
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("bdy").styles.backgroundColor = clr;
    document.getElementById("hex").innerHTML = clr;
}
setInterval(updateTime, 1000);
$("h2").each(function(index, element){
    var animation = TweenMax.to(this, 0.2, {
      className: '+= superShadow',
      marginTop: '-10px',
      marginBottom: '10px',
      ease: Power1.easeIn,
      paused:true
    });
    element.animation = animation;
  })
  $('h2').hover(function(){
   this.animation.play()
  }, function(){
   this.animation.reverse();
  })
  function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
  }
var slider_img = document.querySelector('.slider-img');
var images = ['jordan1.jpg', 'jordan2.jpg', 'jordan3.jpg', 'jordan4.jpg', 'jordan5.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;
	i--;
	return setImg();
}

function next(){
	if(i >= images.length -1) i = -1;
	i++;
	return setImg();
}

function setImg(){
	return slider-img.setAttribute('src', "image/"+images[i]);

}