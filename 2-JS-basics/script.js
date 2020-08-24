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
