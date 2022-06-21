/*
function foo(){
	var one = 123;
	var two = "OK";
	
	//return {"one": one, "two": two };
	return {one,  two };
}

document.write(foo());
console.log(foo());
*/

/*
function add(a,b){
	return a+b;
	
}
*/
var result = function(x, y) { 
	number1 = x;
	number2 = y;
	return number1+number2;
};
document.write(result(2, 14));




/*
function myFunction(firstname, lastname){
	alert("Dear " + firstname + " " + lastname);
	
}

myFunction("Jamie", "Cores");
myFunction (2, 3);
*/
/*
var myVar;
alert(myVar);
console.log(myVar);
*/

/*
x=5;
document.write (x=="5");
//document.write("\n");
document.write("<br>");
document.write(x=== "5");

airline = "delta";

switch(airline){
	
	case "AA":
	document.write("calling AA quote api to get fare");
	break;
	case "delta":
	document.write("calling delta quote api to get fare");
	break;
	default:
	document.write("please check airline choice");
	break;
}
*/


/*
A for statement looks as follows:

for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
  document.write("Walking east one step")
}


let n = 0;
let x = 0;
while (n < 5) {
  n++;
  x += n;
  document.write (" x is : " + x );
  document.write("<br>");
  document.write (" n is : " + n );
}

let i = 10;
do {
//invoke a function and get the result and process
  i += 1;
  console.log(i);
document.write(i);
} while (i < 5);



// Infinite loops are bad!
while (true) {
  console.log('Hello, world!');
}
*/









