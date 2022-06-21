/*
function f1(){
	f2(1);
}

function f2(p1, p2){
	var numParams = arguments.length;
	console.assert(numParams == 2, "unbalanced garbage flow");
	//console.log(numParams == 2)

}

//no code to invoke function f1()
f1();

/*
document.write("console object display");
console.debug("serious problem");
console.info("working normal state");
console.warn("var is undefined");
console.error("cannot connect to backend 404");
*/
class Person {
  constructor(name, age) {
    this.name = name;
	this.age = age;
  }
  display(){
	  console.log(this.name + "  "+ this.age);
	  document.write(this.name + "<br>" + this.age + "<br>");
  }
}

let p1 = new Person("Mark", 22);
p1.display();
let p2 = new Person("Amanda", 25);
p2.display();

/*
function Employee(name, age){
	this.name = name;
	this.age = age;
	this.print = display;
	function display(){
		document.write(this.name + "<br>" + this.age);
	}
	
}

var emp1 = new Employee("kalyan", 25);
console.log(emp1);
emp1.print();
*/
/*
emp1.
let person = {
	name: "Shincy",
	age: 25,
	display: function(){
		console.log(this.name + "  "+ this.age);
	}
	
}

person.display();
*/

/*
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

*/
/*
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
document.write(new Polygon(4, 3).area);

*/

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;   
    this.width = width; 
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = 'Filled rectangle';
    this.color = color;  
  }
}
