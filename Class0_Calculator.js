//Class 0: Claculator
class calculator{
	add = function(a,b){
		return a+b;
	}
	sub = function(a,b){
		return a-b;
	}
	mul = function(a,b){
		return a*b;
	}
	div = function(a,b){
		return a/b;
	}
}

let calc = new calculator;
console.log(calc.add(1,2),calc.sub(1,2),calc.mul(1,2),calc.div(1,2));