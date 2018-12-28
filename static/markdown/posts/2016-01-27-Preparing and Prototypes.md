{ "title": "Preparing and Prototypes", "date": "2016-01-27" }%%%

Another week of preparation down in the weeks leading to Hack Reactor Remote! I'm working through all the required material and building a plan for the last month before complete immersion.

<strong>Preparation</strong>

On top of the pre-course material, I've been working through algorithm challenges on <a href="http://www.freecodecamp.com/" target="_blank">Free Code Camp</a>, reviewing jQuery on Code School, freshening up my knowledge of <a href="https://www.udacity.com/course/object-oriented-javascript--ud015" target="_blank">Object-Oriented Programming</a> on Udacity, and this week  I'll continue to work through a class on <a href="https://www.udemy.com/understand-nodejs/learn/#/" target="_blank">node.js at Udemy</a>! There are so many great resources out there! I've got an even bigger list of material I hope to finish before Feb. 29th, but I doubt I'll get through them all.

<strong>Prototypes</strong>

This week, among other things, I learned a very important distinction between use of the word 'prototype' when speaking about classes in the pseudoclassical pattern of creating new objects. Classes are functions that are used to build new objects that all share a similar list of properties and methods.

The first use of 'prototype' is in reference to the <strong>constructor</strong> <strong>function</strong> that builds new instances of a class.  When that function is created, javascript automatically creates a 'prototype' of the same name. This prototype includes an invisible '.constructor' method that refers to the function that created it. For example, if we have a function called 'Knight' it will be connected to the function 'Knight.prototype'.  If we log the '.constructor' property on a new instance created by 'Knight', it will return the function that created it, in this case the function assigned to 'Knight'.

```javascript
var Knight = function(name, weapon) {
  this.name = name;
  this.weapon = weapon;
};

Knight.prototype.strike = function() {
  console.log(this.name + " hit you with the " + this.weapon);
};

var steve = new Knight("Steve", "Mace");

steve.strike();
console.log(steve.constructor);
//Knight.strike(); Does not work!!!
```

The first use of 'prototype' refers to the link to the class constructor function. The second use of 'prototype' refers to the link to new <strong>instances</strong> of that constructor and the same prototype.

In the pseudoclassical pattern, a prototype('Knight.prototype') is linked to its class creating function('Knight')of the same name, and to all new instances of that class. The function 'Knight' is linked for the purpose of assigning new instances to 'Knight.prototype'.  The instances are then linked for the purpose of fall through after failed look ups. For example, in the code above you can call steve.strike(); but you could not call Knight.strike();

All of this is explained really well by Marcus Phillips in a Udacity course I highly recommend on <a href="https://www.udacity.com/course/object-oriented-javascript--ud015" target="_blank">Object-Oriented Programming</a>.
