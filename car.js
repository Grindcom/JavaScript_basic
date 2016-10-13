// From Udacity, Front-end Developer:
// Object Oriented JavaScript course
// Additional code by: Greg Ford

// document.write("hello world.");
// Car is a SuperClass; it is the base class
//  For the automobiles,
//
var Car = function(location){
    console.log("Make Car");
    this.loc = location;
    console.log("Car: " + this.loc);
    document.write("Car: " + this.loc + '<br>');
};
Car.prototype.move = function(){
    this.loc++;
    console.log("New Car location: " + this.loc);
    document.write("New Car location: " + this.loc + '<br>');
};
//
// Van is a Sub-Class of Car
//
var Van = function(loc){
    console.log("Make Van");
    Car.call(this, loc);
};
Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function(){
    // Do something
    this.loc += 5;
};
//
// Operational testing
//
// Make a new car and van
var amy = new Car(5);
var jim = new Van(3);
// Move the van
console.log("Jim move...");
jim.move();// uses the Car.move function
console.log("Jim move...");
jim.grab();
// Show the current location to the log and html page
console.log("Jims location is: " + jim.loc);
document.write("Jims location is: " + jim.loc + '<br>');
