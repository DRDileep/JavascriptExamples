/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var person1 = {
  name: "james bond",
  whatsTheName: function(){
  	sayMyName();
  }
  sayMyName: function(){
    console.log("my name is "+name)  
  }
};

person1.sayMyName();//output : my name is 
/*here the problem is that the window is the context and it doesnt have any property 'name'*/

var name = "pikachu";

person1.sayMyName();

