// JavaScript Document

var scrollSpeed = 24;
/*
 *use up,right,down,left key
 *to control scrollbar
 */
$(document).keydown(function(event){ 
  //console.log(event.keyCode); 
	var scrollX = $("#VerticalLayout").scrollLeft();
	
	if(37 == event.keyCode || 40 == event.keyCode){
	  $("#VerticalLayout").scrollLeft(scrollX - scrollSpeed);
	}
	if(38 == event.keyCode || 39 == event.keyCode){
	  $("#VerticalLayout").scrollLeft(scrollX + scrollSpeed);
	}
});

/*
 *use mouse click to control scroll bar
 */
$("#VerticalLayout").mouseup(function(e) {
	//you can guess why I add this one.
	//OK. It's because of 'The Devil Chrome'.
	//In Chrome, your 'click' event will trigger 'mousemove'......
	//so I have to unbind 'mousemove' after click;
  $("#VerticalLayout").unbind("mousemove");
	return false;
});

$("#VerticalLayout").click(function(e) {
	//I don't want to choose any words.
  return false;
});
//when mouse down, I will start to let the controlbar change the state.
$("#VerticalLayout").mousedown(function(e) {
  var x1 = e.pageX;
	//console.log(e.pageX); 
	var scrollX = $("#VerticalLayout").scrollLeft();
	$("#VerticalLayout").mousemove(function(e) {
    var x2 = e.pageX;
		//console.log(e.pageX);
		$("#VerticalLayout").scrollLeft(scrollX - (x2 - x1));
  });
	return false;
});

//use mouse wheel to control scrollbar
//Here I import a third Lib 'jquery.mousewheel.min.js'
$("#VerticalLayout").mousewheel(function(e, delta, deltaX, deltaY){
  console.log(delta, deltaX, deltaY);	
	var scrollX = $("#VerticalLayout").scrollLeft();
	$("#VerticalLayout").scrollLeft(scrollX + scrollSpeed * delta);
})

