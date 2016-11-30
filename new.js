////////////////////////////////////////////////////////////////////////////////
//////////////example 1

function Dog(name,age){
  this.name=name;
  this.age=age;
  this.bark =()=>{
    console.log(this.name +" barked ")
  }
};
//using the Dog function inside Cat so we dont have to repeat
//call is used to use to keep this as a reference to Cat. Therefore the method
//this.purr can be used in the Dog();
function Cat(name,age){
  Dog.apply(this,arguments);//same as (this,[name,age])
  this.purr=()=>{
    console.log(this.name+"purred")
  };
};
//Need to use New or this will not be attached
//this is called a constructor function
var coco = new Dog("coco",3);
coco.bark();
var cat = new Cat("oreo ",5);
cat.purr("oreo",5);

////////////////////////////////////////////////////////////////////////////////
//////////////example 3
function Vehicle(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isRunning=false;
};
//place the following methods on the Toyota Object
Vehicle.prototype.turnOn =function(){
    return  this.isRunning=true;
};
Vehicle.prototype.turnOff =function(){
    this.isRunning=false;
};
Vehicle.prototype.Honk = function(){
  if(this.isRunning){
    return "beep"
  };
}

var Toyota = new Vehicle("Toyota","Camry","1991");
console.log(Toyota.turnOn())//we can now call turnOff,TurnOn,Honk
