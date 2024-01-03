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