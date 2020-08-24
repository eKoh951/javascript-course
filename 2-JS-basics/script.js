/***************************
 * Variables and data types
 */

 /*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);
*/

// Variable naming rules
// var 3years = 3;	// error with 3
var _3years = 3;
// var John/mark = 'John and mark'; // error with /
var JohnMark = 'John and mark';
// var if = 23; // error with if

/***************************
 * Variable mutation and type coercion
 */
/*
// Type coercion
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teadher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/
/***************************
* Basic operators
*/

/*
// Math operators
var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);
// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/***************************
* Operators precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ( ageJohn + ageMark ) / 2;
console.log( average );

// Multiple assignments
var x, y;
x = y = ( 3 + 5 ) * 4 - 6;
console.log( x, y );

// More operators

// x = x * 2;
x *= 2;
console.log( x );
x += 10;
console.log( x );
x++;
console.log( x );
x--;
console.log( x );
*/

var markHeight = 1.8;
var markMass = 80;
var markBMI = markMass / ( markHeight * markHeight );

var johnHeight = 1.9;
var johnMass = 85;
var johnBMI  = johnMass / ( johnHeight * johnHeight );

var isMarkBmiHigher = markBMI > johnBMI;

console.log( 'Is Mark\'s BMI higher than Johns?', isMarkBmiHigher );
console.log( 'Mark\'s BMI is ', markBMI );
console.log( 'John\'s BMI is ', johnBMI );