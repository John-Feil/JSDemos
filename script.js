// Assignment of various variables
var name = "Sammy";
var spartans = 300;
var kingdoms = [ "mammals", "birds", "fish" ];
var poem = { roses: "red", violets: "blue" }; 
var success = true;
var nothing = null;

// Keyword	Scope	         Hoisting	Can Be Reassigned	Can Be Redeclared
// var	    Function scope	Yes	         Yes	            Yes
// let	    Block scope	    No	          Yes	            No
// const	Block scope	    No	           No	            No


// The code we wrote
console.log(x);
var x = 100;

// How JavaScript interpreted it
var x;
console.log(x);
x = 100;

// Hoisting causes the x variable to be saved before exeuting the code, however it
// will be undefined but won't cause a error.


// Initialize x in the global scope
var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();

// Hoisting brings up the function past the intialization of x, causing it to
// console.log undefined

// let and const avoid this usse as they are block-scoped and will throw a error
// if attempting to use a variable before declaring it.

// Const should be all uppercased and cannot be reassigned, though if used as a
// object you can modify the properties of the object





// CONVERTING DATA TYPES IN JAVASCRIPT



// Js will auto convert most of the time but it's good practice to manually do so

// Even if you use mathematical signs on strings it'll convert them to numbers
// though + is an exception due to it also meaning concatenation

String(true);
// returns a string value of "true"

let odyssey = 2001;
console.log(typeof odyssey);
toString(odyssey);
console.log(typeof odyssey);

// converts a num to a string

Number("1984");
// returns a number of 1984

let dalmatians = "101";
Number(dalmatians);
// returns 101 as a number

Number("twelve");	// returns NaN
Number("20,000");	// returns NaN
Number("2 3");		// returns NaN
Number("11-11-11");	// returns NaN

Number(false);		// returns 0
Number(true);		// returns 1

Number(" ");	// returns 0
Number("");		// returns 0

Boolean(0);			// returns false
Boolean("");		// returns false
Boolean(undefined);	// returns false
Boolean(NaN);		// returns false
Boolean(null);		// returns false

Boolean(2000);		// returns true
Boolean(" ");		// returns true
Boolean("Maniacs");	// returns true
Boolean("0");	// returns true




// UNDERSTANDING OBJECTS IN JAVASCRIPT

// Initialize gimli object
const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};

// new object called gilmi, with 3 property's and a function greet
// this keyword refers to the current object

// can access properties by using dot notation(.) or bracket([""])

// Retrieve the value of the weapon property
gimli.weapon;
// Retrieve the value of the weapon property
gimli["weapon"];

gimli.greet();
// calls the function on the object

// you can also add new properties with the aforementioned notation and a = sign

// Add new age property to gimli
gimli.age = 139;
// Add new age property to gimli
gimli["age"] = 139;

// can also add a function with the same process

// Add new fight method to gimli
gimli.fight = function() {
	return `Gimli attacks with an ${this.weapon}.`;
}

// to change a property is the same syntax to add a new one

// Update weapon from axe to battle axe
gimli.weapon = "battle axe";

// use the delete keyword to remove properties

// Remove weapon from gimli (returns true)
delete gimli.weapon;

// can iterate through a object using a for...in loop

// Iterate through properties of gimli
for (let key in gimli) {
    console.log(gimli[key]);
  }

// key is the individual element/property and gimli is the object to loop through

// not to be confused for for...of which is used exclusively for arrays

// Initialize method on gimli object to return property keys
Object.keys(gimli);
// returns name of properties


// prototypes for objects

// you can use the prototype property to add on new properties and functions to existing objects

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

  // Now all Person's created from that object construct will now have a english nationality

  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  // this is the syntax for adding a new function









// UNDERSTANDING EVENTS IN JAVASCRIPT



// a event handler is a JS function that runs when an event fires
// an event listener attaches a responsive interface to a element, which
// lets it "listen" for the given event to fire.

// Check index.html for inline event handler! line 11-12

// simple function to call on the inline event handler

const changeText = () => {
	const p = document.querySelector('p');

	p.textContent = "I changed because of an inline event handler.";
}

// inline event handlers are straightforward and easy to understand however
// should not be used beyond testing or education purposed as it's much more
// practical to maintain all js to one place (same logic as CSS styles)

//event handler works the same as a inline handler, but located in the js file

const button = document.querySelector('button');
button.onclick = changeText;
// event handler's don't follow camelCase convention so it's onclick
// we do not use parenthesis as we're not invoking the function in the moment, 
// and only passing a refeence

// the event listener watches for an event on a element, it takes two mandatory
// parameters, the event to be listening for and the callback function!

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);

// event listeners seem very similar to event handlers however there are
// advantages, you can have multiple event listeners on one element
// and you can also remove it with the removeEventListener

// Remove alert function from button element
button.removeEventListener('click', alertText);

// Event listeners are the most common and preferred way


// Mouse events:

// Event	      Description
// click	    Fires when the mouse is pressed and released on an element
// dblclick	     Fires when an element is clicked twice
// mouseenter	Fires when a pointer enters an element
// mouseleave	Fires when a pointer leaves an element
// mousemove	Fires every time a pointer moves inside an element



// Form events:

// Event	Description
// submit	Fires when a form is submitted
// focus	Fires when an element (such as an input) receives focus
// blur	    Fires when an element loses focus


// Keyboard events:


// Event	    Description
// keydown	    Fires once when a key is pressed
// keyup	    Fires once when a key is released
// keypress	    Fires continuously while a key is pressed

// keypress will omit keys that do not produce a character (ex: shift, alt, etc)


// Property 	Description	                              Example
// key	        Represents the character name	            a
// code	        Represents the physical key being pressed  KeyA


// can use the event object to access the aforementioned code (event.code)

// Pass an event through to a listener
document.addEventListener('keydown', event => {
	var element = document.querySelector('p');

	// Set variables for keydown codes
	var a = 'KeyA';
	var s = 'KeyS';
	var d = 'KeyD';
	var w = 'KeyW';

	// Set a direction for each code
	switch (event.code) {
		case a:
			element.textContent = 'Left';
			break;
		case s:
			element.textContent = 'Down';
			break;
		case d:
			element.textContent = 'Right';
			break;
		case w:
			element.textContent = 'Up';
			break;
	}
});
// Everytime you press 'a','s','d','w' the text is element p changes

// Relevent HTML on line 14-18

// event.target will output the element if you click on it

const section = document.querySelector('section');

// Print the selected target
section.addEventListener('click', event => {
	console.log(event.target);
});

// Find the section and if you click on a element in the sections, it logs it







// HOW TO WITH WITH JSON IN JAVASCRIPT


//JSON stands for Javascipt Object Notation

// some general use cases of JSON include:

// Storing data
// Generating data structures from user input
// Transferring data from server to client, client to server, and server to server
// Configuring and verifying data

// JSON format follows JS object syntax. It's key-value data rendered in curly brackets


// If its located in a .json file it would look like this: 

// { 
//     "first_name"  :  "Sammy", 
//     "last_name"   :  "Shark", 
//     "online"      :  true 
//   }

// if it's in a .js or .html it will most likely be set to a variable

// var sammy = { 
//     "first_name"  :  "Sammy", 
//     "last_name"   :  "Shark", 
//     "online"      :  true 
//   }

// or like this

// var sammy = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

// converting json to a string can be useful to move data quickly

// json was made to work and be used by any programming langauge
// js objects can use function and the keys are not strings in quotes
// to acces json in js use dot notation

// ex from the example on lines 332-336

alert(sammy.first_name); // will call the json sammy's first name

// or you can use bracket notation like this

alert(sammy["online"]); // you will need to keep the key surrounded in quotes unlike a js object

// Here's how you work with json nested array elements

var user_profile = { 
    "username" : "SammyShark",
    "social_media" : [
      {
        "description" : "twitter",
        "link" : "https://twitter.com/digitalocean"
      },
      {
        "description" : "facebook",
        "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
      },
      {
        "description" : "github",
        "link" : "https://github.com/digitalocean"
      }
    ]
  }

  // to access facebook
  alert(user_profile.social_media[1].description);

  // Functions to help with working w/ json

  // Here is how JSON.stringify() works, it converts an object to a JSON string;

  var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}

  var s = JSON.stringify(obj);

  // JSON.parse() is used to convert the JSON string back to an object

  var o = JSON.parse(s);




  


// UNDERSTANDING CLASSES IN JAVASCRIPT



// A javascript class is a function

// Initializing a function with a function expression
const x = function() {}

// Initializing a class with a class expression
const y = class {}

// Initializing a constructor function
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Initializing a class definition
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
}

// As you can see from above, there's a lot of similarities between the two of them!

// To add a function to a existing constructor function, you can use the prototype

Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}


// for classes, you can it directly to the class 

class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}

	// Adding a method to the constructor
	greet() {
		return `${this.name} says hello.`;
    }
}

// we can make an instance of it like this

const hero = new Hero('john',1);

// and if we console.log(hero) it returns:
// Hero {name: "Varg", level: 1}
// __proto__:
//   ▶ constructor: class Hero
//   ▶ greet: ƒ greet()

// An advantage to constructor functions and classes is that you can extend into new blueprints

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
}

// if we now make a new mage and send it to the console....

const heroMage = new Mage('leo',2,'Glintstone pebble');

// returns..
// Mage {name: "leo", level: 2, spell: "Glintstone pebble"}
// __proto__:
//     ▶ constructor: ƒ Mage(name, level, spell)


// For classes, we use the super keyword in place of call and extend from the parent class

// Creating a new class from the parent
class Mage extends Hero {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}








// UNDERSTANDING DESTRUCTURING, REST PARAMETERS, AND SPREAD SYNTAX IN JAVA SCRIPT 



// Desturcturing assignment syntax is a easy way to create variables for data in objects and arrays

const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }

  // instead of indidually assigning all of them like this: const id = note.id;

  // we can do it on one line like this

  // Destructure properties into variables
const { id, title, date } = note;

// which makes const variables of id, title and date from the object note

// can also use custom names by using a semi-colon like below

// Assigning custom names to a destructured value
const { id: noteId, noteTitle, noteDate } = note;

// to destructure nested object values:

const newNote = {
    id: 2,
    author: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
  }

  // Destructure nested properties
const { newNoteId, author: { firstName, lastName } } = newNote;

// Can use use desturcturing to acces object properties of primitive values

const { length } = 'A string';
// will output 8

// The string "A string" is implicitly converted to a object to get the length property

// Array Destructuring

// You can also use destructuring on arrays like so:

const theDate = ['1970', '12', '01']

// and instead of individually assigning like: const year = theDate[0];

// Destructure Array values into variables
const [year, month, day] = theDate;

// You can skip elements in the array by leaving the space between quotes black (ex: [year, , day])

// the syntax to use this on a nested array is as follows:

// Create a nested array
const nestedArray = [1, 2, [3, 4], 5]

// Destructure nested items
const [one, two, [three, four], five] = nestedArray

// to go through an array we'll use notes intialized on line 532

// Using forEach
Object.entries(note).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
  })

  // Using a for loop
for (let [key, value] of Object.entries(note)) {
    console.log(`${key}: ${value}`)
  }

  // To destructure an object and setting a new date variable we can do this:

  const dateNote = {
    title: 'My first note',
    author: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
    tags: ['personal', 'writing', 'investigations'],
  }

  const {
    Datetitle,
    Datedate = new Date(),  // defines a new variable and set's it to the current date
    author: { dateFirstName },
    tags: [personalTag, writingTag],
  } = dateNote
  
  // Spread syntax allows objects and iterables to be unpacked or expanded

  // to normally combine two array's you'll just use concat but instead

  // Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools]

// which outputs ["hammer", "screwdriver", "wrench", "saw"]

// spread is a convenient way to make or add to a array without affecting the original

// Array of users
const users = [
    { id: 1, name: 'Ben' },
    { id: 2, name: 'Leslie' },
  ]

  // A new user to be added
const newUser = { id: 3, name: 'Ron' }

const updatedUsers = [...users, newUser]

// makes a new array with the new user without changing the original array users

// Spread also avoids unexpected changes such as the scenario below:

// Create an Array
const originalArray = ['one', 'two', 'three']

// Assign Array to another variable
const secondArray = originalArray

// when you assign the arrray to another variable like this, you're only actually assigning 
// a reference

// Remove the last item of the second Array
secondArray.pop()

console.log(originalArray)
// returns ["one", "two"] showing that secondArray is actually only a reference

// while this example using spread doesn't affect the originalArray

// Create an Array
//const originalArray = ['one', 'two', 'three']

// Use spread to make a shallow copy
//const secondArray = [...originalArray]

// Remove the last item of the second Array
//secondArray.pop()

//console.log(originalArray)
//this returns: ["one", "two", "three"]


// spread can also be used to convert a set or other iterables to an array

// Create a set
const set = new Set()

set.add('octopus')
set.add('starfish')
set.add('whale')

// Convert Set to Array
const seaCreatures = [...set]

console.log(seaCreatures)
// spread converts the set to an array that will output: ["octopus", "starfish", "whale"]

// spread can also be used with creating a array from a string

const string = 'hello'

const stringArray = [...string]

console.log(stringArray) // returns ["h", "e", "l", "l", "o"]


// Speads can also be used with objects 

// Originally we used object.assign to copy an object
// but with spreads we can also accomplish the same thing

const originalObject = {
    powerMode: on,
    enabled: true
}

const secondObject = { ...originalObject}

// the above code uses spread to copy a object

// however if you have an object nested in the object then that also has to be spread
// or else you'll overwrite the existing field

// you can also use spreads on parameters in a function call

multiply(1,2,3);

const numbers = [1,2,3];
multiply(...numbers);

// the above uses spread to utilize an array to use for the parameters


// rest parameters are used to gather arguments in functions into an array

function restTest(one, two, ...args){
  console.log(one);
  console.log(two);
  console.log(args);
}

restTest(1,2,3,4,5);
// will print 1, 2, [3,4,5]





// UNDERSTANDING ARROW FUNCTIONS


// function expressions are usually assigned to a variable and can be anonymous

const sum = function (a, b) {
  return a + b;
}

// the above code defines a const sum to a reference of a anonymous function

// you can name functions using the function keyword but it's not common practice

// the arrow function syntax is

const arrowsum = (a,b) => {
  return a + b;
}

// arrow functions are always anonymous

// the keyword this that scopes a variable by assuming you're referring to the surrounding
// scope

// you can bind the this keyword to ensure it's targeting what you want

// arrow functions are great for parameter functions but are not ideal for object methods
// better to use normal functions in objects as the scope for the keyword this
// will not work properly with arrow functions

// arrow functions also cannot use constructors or the prototype property
// arrow functions also have convenient syntax for one line functions

// such as:
const lineSum = (a,b) => a + b;

// you can also omit the parenthesis if its only one variable







// UNDERSTANDING THE EVENT LOOPS, CALLBACKS, ASYNC/AWAIT in JS

// Javascript is a synchronous execution which means it goes one at a time
// therefore "blocking" can occur if something takes time to load

// you can use the setTimeout function to simuluate asynchronous execution
// setTimeout takes two parameters, the function and the amount of time to wait

// Javascript also uses a similar stack and queue to Java

// setTimeout pauses the method call from going to the queue until the alloted time passes

// callback functions are not asynchronous

// you can use the promise keyword to represent the completion of asyrnchrnous functions
// promises can be chained and don't need to be nested leading to cleaner code

const promise = new Promise((resolve,reject) => {});
// ^ makes a new promise

// a promise has 3 states, pending, fufilled and rejected 
// most developers mainly consume and use promises from apis, rather than make them

function getUsers(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
      if (onSuccess) {
        resolve([
          {id: 1, name: 'Jerry'},
          {id: 2, name: 'Elaine'},
          {id: 3, name: 'George'},
        ])
      } else {
        reject('Failed to fetch data!')
      }
    }, 1000)
  })
}

// In the example above, we can see if it passes, it will return data after the timeout asynchronous
// however if it fails...

// Run the getUsers function with the false flag to trigger an error
getUsers(false)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })

  // then it skips the .then and goes to the catch the returns the error "failed to fetch data"

  
// Method	            Description
// then()	            Handles a resolve. Returns a promise, and calls onFulfilled function asynchronously
// catch()	          Handles a reject. Returns a promise, and calls onRejected function asynchronously
// finally()	        Called when a promise is settled. Returns a promise, and calls onFinally function asynchronously


// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })

  // in the above practical example, we attempt to fetch a users data, if it suceeds and goes to the .then, it will
  // return the response and then log it and if it fails, it will log the error

  // You can also use the async function which just uses promises under the hood

  // Handling success and errors with async/await
async function getUser() {
  try {
    // Handle success in try
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    // Handle error in catch
    console.error(error)
  }
}

// in the above example we can see some similarites with the promises example, if it suceeds the try it will fetch
// and then convert the data before logging it, while if it fails it will log the error. You can view the await function
// as it means it will wait until the hidden promise fails to suceeds.







// HOW TO USE THE ARRAY METHODS IN JAVASCRIPT: ITERATION METHODS



// the for-each method is used on arrays on each item in the array 

let fish = [ "piranha", "barracuda", "cod", "eel" ];

// Print out each item in the array
fish.forEach(individualFish => {
	console.log(individualFish);
})

// the above code prints out the list of items in the fish array

// there is also a for-loop that can accomplish the same thing, though the forEach is more concise and preferred

// Loop through the length of the array
for (let i = 0; i < fish.length; i++) {
	console.log(fish[i]);
}
// the map function creates a new array based on the orignal array and the results of a function

// Pluralize all items in the fish array
let pluralFish = fish.map(individualFish => {
	return `${individualFish}s`;
});

pluralFish;

// the above example makes a new array of fish and add's an s to to end of every item

// the filter method makes a new array based on a orignal array and a filter

let newSeaCreatures = [ "shark", "whale", "squid", "starfish", "narwhal" ];

// Filter all creatures that start with "s" into a new list
let filteredList = newSeaCreatures.filter(creature => {
  return creature[0] === "s";
});

filteredList;

// the reduce method reduces an entire array to one element mainly used with numbers


// Get the sum of all numerical values
let newSum = numbers.reduce((a, b) => {
	return a + b;
});

sum;
// the example adds up all of the numbers in the numbers array to one element

// the find method reduces an array to the first element that passes the intial filter

// Check if a given value is a cephalopod
const isCephalopod = cephalopod => {
	return [ "cuttlefish", "octopus" ].includes(cephalopod);
}

seaCreatures.find(isCephalopod);

// the findIndex is idential to the find method but returns the index instead




