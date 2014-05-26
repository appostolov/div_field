// JavaScript Document
var r;
	
	var fu2 = function(){
			r = 1; 
	}
	
	var fu3 = function(){
			r = 0; 
	}
	
	var fu = function(){
		if( r == 1 ){
			this.style.backgroundColor = document.getElementById("color_select").value;
		}
	}

	for(var a = 0; a < 10000; a ++){
	
	var p = document.createElement("div");
	p.style.position = "relative";
	p.style.width = "5px";
	p.style.height = "5px";
	p.style.cssFloat = "left";
	p.onmouseup = fu3;
	p.onmousedown = fu2;
	p.onmouseover = fu;
	document.getElementById("plane").appendChild(p);
	
	}
