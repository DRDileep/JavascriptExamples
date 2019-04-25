

var person = {
  name: "james bond",
  sayMyName: function(){
    console.log("my name is "+name); 
  }
};

person.sayMyName();//output : my name is 
/*here the problem is that the window is the context and it doesnt have any property 'name'*/

var name = "pikachu";//now we define the global variable

person.sayMyName();//now the property name is available in the global context so that will
//be used;

//------------------------------------------call()-----------------------
person = {
  name: "james bond",
  sayMyName: function(){
    console.log("my name is "+this.name); 
  }
};

person.sayMyName();
var anotherPerson = {
	name: "thief"
};

//we can use the another person object call a method from the person object do as follows:
person.sayMyName.call(anotherPerson);//explicitly binding the this context
//output will be ----> my name is thief


//call() with arguments

