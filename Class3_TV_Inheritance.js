//Class 3: TV class - Inheritance
class TV{
	constructor(brand,price,inches,ONOff){
		this.brand = brand;
		this.price = price;
		this.inches = inches;
		this.ONOff = ONOff;
		this.channel = 1;
		this.volume = 50;
		this.totChannel = 399;
	}
	volincr = function(){
		if(this.volume < 100)
			this.volume++;
		else
			console.log("cannot increase volume beyond 100")
	}
	voldcr = function(){
		if(this.volume > 0)
			this.volume--;
		else
			console.log("already on mute")
	}
	chnChannel = function(channel){
		if(channel <= this.totChannel)
			this.channel = channel;
	}
	resetTv = function(){
		this.volume = 50;
		this.channel = 1;
	}
	getTvStatus = function(){
		console.log(this.brand + " at channel " + this.channel + " volume " + this.volume)
	}
}

class LED extends TV{
	constructor(brand,price,inches,ONOff,screenThickness,energyUsage,lifespan,refreshRate,viewingAngle,backLight){
		super(brand,price,inches,ONOff);
		this.screenThickness = screenThickness;
		this.energyUsage = energyUsage;
		this.lifespan = lifespan;
		this.refreshRate = refreshRate;
		this.viewingAngle = viewingAngle;
		this.backLight = backLight;
		this.displayDetails = "LED Panel"
		this.totChannel = 999
	}
}
class Plasma extends TV{
	constructor(brand,price,inches,ONOff,screenThickness,energyUsage,lifespan,refreshRate,viewingAngle,backLight){
		super(brand,price,inches,ONOff);
		this.screenThickness = screenThickness;
		this.energyUsage = energyUsage;
		this.lifespan = lifespan;
		this.refreshRate = refreshRate;
		this.viewingAngle = viewingAngle;
		this.backLight = backLight;
		this.displayDetails = "Plasma Screen"
	}
}

let led1 = new LED("LG",25000,32,true,2.5,25,5,90,135,"LED Backlight");
console.log(led1);
let plasma1 = new Plasma("BPL",5000,21,false,20,60,2,30,100,"RGB Backlight");
console.log(plasma1);

led1.volincr();
console.log("Volume after increasing is "+led1.volume);
led1.voldcr();
console.log("Volume after decreasing is "+led1.volume);
led1.volume = 100;
led1.volincr();




