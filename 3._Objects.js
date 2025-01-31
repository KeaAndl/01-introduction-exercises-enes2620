// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObject = { message: "Hello, earthling! I bring peace." };
console.log(myObject.message.valueOf())
// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const nameAge = {name:"Enes", age:23}
console.log("Name",nameAge.name.valueOf() ,"Age", nameAge.age.valueOf())

// --------------------------------------
// Exercise 3 - Add a key-value pair 

const stackOverflow = {};
stackOverflow.isAllowed=true;
console.log(stackOverflow.isAllowed.valueOf())
// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };
delete thisSong.description
console.log("Det her burde være description:",thisSong.description)
// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


