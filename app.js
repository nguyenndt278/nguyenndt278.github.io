var ab = function () {
	var duration = 800;
	var bird = Snap.select("#bird");
  var parts = ['wing_b','head','body','wing_f'];
  var elements = [];
  var w = bird.attr('width');
  var h = bird.attr('height');
  
  
  for (i = 0; i < parts.length; i++) {
    var element = bird.select("#" + parts[i]);
    element.attr('d1',element.attr('d'));
    elements.push(element);
  }
  
  var anim1 = function(){
    bird.stop().animate({height:h*.85},duration,mina.easeinout);
    for (i = 0; i < elements.length; i++) {
      elements[i].stop().animate({
        d: elements[i].attr('d2')
      }, duration, mina.easeinout,anim2);
  	}
  }
  
  var anim2 = function(){
    bird.stop().animate({width:w, height:h},duration, mina.easeinout);
    for (i = 0; i < elements.length; i++) {
      elements[i].stop().animate({
        d: elements[i].attr('d1')
      },duration, mina.easeinout,anim1);
  	}
  }
	
  anim1();
};

ab();
