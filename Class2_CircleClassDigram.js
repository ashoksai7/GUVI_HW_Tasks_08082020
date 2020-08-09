//Class 2: Circle - Class Diagram
class Circle{
	constructor(radius = 1.0,color = "red"){
		this.radius = radius;
		this.color = color;
	}
	getRadius = function(){
		return this.radius;
	}
	getColor = function(){
		return this.color;
	}
	setRadius = function(radius){
		this.radius = radius;
	}
	setColor = function(color){
		this.color = color;
	}
	toStr = function(){
		return this.radius.toString() +" and " + this.color;
	}
	getArea = function(){
		return (22/7)*(this.radius**2)
	}
}

let cir1 = new Circle();
let cir2 = new Circle(2.0);
let cir3 = new Circle(3.0,"blue");
console.log("Radius and color of circle 1: " + cir1.toStr());
console.log("Radius and color of circle 2: " + cir2.toStr());
console.log("Radius and color of circle 3: " + cir3.toStr());
cir1.setRadius(1.5);
console.log("Radius and color of circle 1 after update: " + cir1.toStr());
cir2.setColor("green");
console.log("Radius and color of circle 2 after update: " + cir2.toStr());

console.log(cir1.getArea());
console.log(cir2.getArea());
console.log(cir3.getArea());

