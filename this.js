////////////////////////////////////////////////////////////////////////////////
//////////////example 1
//"use strict"
function WrongThis(){
  this.hello="hey";
}
WrongThis();
hello;//hello is now global variable unless we use "use strict"
console.log(hello);//undefined with "use strict" and "hey" if not used
////////////////////////////////////////////////////////////////////////////////
//////////////example 2

var person= {
  firstName:"phi",
  age:"5",
  sayHi(){  //This is a shorthand syntax, using sayHi:()=>{will reference this to windows}
    return "Hi " + this.firstName +" i am "+this.age ;
  }
};
console.log(person.sayHi());//should return hi Phi i am 5 ;

////////////////////////////////////////////////////////////////////////////////
//////////////example 3
var Phi= {
  firstName:"phi",
  age:"5",
  sayHi(){  //This is a shorthand syntax, using sayHi:()=>{will reference this to windows}
    return "Hi " + this.firstName +" i am "+this.age ;
  },
  addNumbers(a,b,c,d){
    return this.firstName + " just added " + (a+b+c+d);
  },
  asyncAdd(a,b,c,d){
    setTimeout(function(){
      return console.log(this.firstName + " just added " + (a+b+c+d));
    }.bind(this),600)//save Phi as an object to this, which can be called later
  },
};

var PhiOlder={
  firstName:"Phi",
  age:"21"
};

console.log(Phi.sayHi.call(PhiOlder));//expect HI, Phi, I am 21
console.log(Phi.addNumbers.call(PhiOlder,1,2,3,4));
console.log(Phi.addNumbers.apply(PhiOlder,[2,3,4,5]));//only diff is it takes arrays
Phi.asyncAdd(2,3,4,5)


////////////////////////////////////////////////////////////////////////////////
//////////////example 4

function Dog(name,age){ //arrow functions cannot be used as constructors
  this.name=name;
  this.age=age;
}
var coco = new Dog("james","12");
console.log(coco.name+"is"+coco.age);
