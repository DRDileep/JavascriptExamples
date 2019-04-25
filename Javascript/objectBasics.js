let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
}; //here the object will have global scope as we are using let outside all the functions

// get fields of the object:
console.log( user.name ); // John
console.log( user.age ); // 30
console.log("User age accessed using square brackets: "+user["age"]);

//Let’s add a boolean one:
user.isAdmin = true;

delete user.age;//to delete the property age from user

//We can also use multiword property names, but then they must be quoted:
let anotherUser = {
  name: "John",
  age: 30,
  "likes birds": true,  // multiword property name must be quoted
  isSuperMan : false,//last property can end with a comma
};


//accessing elements with multiproperty name
//anotherUser.like birds = false;//will result in error
console.log(anotherUser["like birds"]);


//let key = prompt("What do you want to know about the user?", "name");//second parameter is the default placeholder value

// access by variable
//alert( user[key] ); // John (if enter "name")
/*
In the above case, the variable key may be calculated at run-time or depend on the user 
input. And then we use it to access the property. That gives us a great deal of flexibility.
 The dot notation cannot be used in a similar way.
*/


//In real code we often use existing variables as values for property names.

//For instance:

 function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...other properties
  };
}

user = makeUser("John", 30);
console.log(user.name); // John

//how to check if a property exists in an object
console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false, user.blabla doesn't exist


//using const
const user2 = {
  name: "John"
};

//Following will give Error (can't reassign user) or error: assignment to constant variable
/*
user2 = {
  name: "Pete"
};*/

const pi = 3.14;
console.log(pi);
//pi =9.87;//error : assignment to constant variable


//copying and cloning objects
 //copying an object variable creates one more reference to the same object.
 user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {//so that key will have only block scope
  clone[key] = user[key];
}

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it

console.log( user.name ); // still John in the original object


//---------------------------------------------------
user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
//If the receiving object (user) already has the same named property, it will be overwritten:
