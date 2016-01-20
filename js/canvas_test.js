function setCanvasSize(){
	var viewportWidth = 0, viewportHeight = 0;
	viewportWidth = window.innerWidth;
	viewportHeight = window.innerHeight;

	console.log("window.innerWidth: " + viewportWidth);
	console.log("window.innerHeight: " + viewportHeight);
	
	var canvas_object = document.getElementById("canvas_1");
	canvas_object.style.width = viewportWidth + "px";
	canvas_object.style.height = viewportHeight + "px";

}
//setCanvasSize()