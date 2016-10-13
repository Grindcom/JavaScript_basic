// From Udacity, Front-end Developer:
// Object Oriented JavaScript course
// Additional code by: Greg Ford

// document.write("hello world.");

var fn = function(one, two){
    console.log(this, one, two);
    document.write(this, one, two);
}
fn("red","blue");
