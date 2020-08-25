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

/***************************
* Coding challenge
*/

/*

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

*/

/***************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if ( civilStatus === 'married' ) {
	console.log( firstName + ' is married!' );
} else {
	console.log( firstName + ' will hopefully marry soon :) ');
}

var isMarried = true;

if ( isMarried ){
	console.log( firstName + ' is married!' );
} else {
	console.log( firstName + ' will hopefully marry soon :) ');
}

var markHeight = 1.8;
var markMass = 80;
var markBMI = markMass / ( markHeight * markHeight );

var johnHeight = 1.9;
var johnMass = 85;
var johnBMI  = johnMass / ( johnHeight * johnHeight );

var isMarkBmiHigher = markBMI > johnBMI;

if ( markBMI > johnBMI ) {
	console.log('Mark\' BMI is higer than John\'s.');
} else {
	console.log('John\'s BMI is higer than Mark\'s.');
}
*/

/***************************
* Boolean logic
*/

// var firstName = 'John';
// var age = 30;

// if ( age < 13 ) {
// 	console.log( firstName + ' is a boy.' );
// } else if ( age < 20 ) {
// 	console.log( firstName + ' is a teenager.' );
// } else if ( age < 30 ) {
// 	console.log( firstName + ' is a young man.' );
// } else {
// 	console.log( firstName + ' is a man.' );
// }dan


/***************************
* The Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 16;

// age >= 18  ? console.log( firstName + ' drinks beer.' ) : console.log( firstName + ' drinks juice.' );

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log( drink );

// // Switch statement
// var job = 'driver';

// switch ( job ) {
// 	case 'teacher':
// 	case 'instructor':
// 		console.log( firstName + ' teaches kids how to code.');
// 		break;

// 	case 'driver':
// 		console.log( firstName + ' drives an uber in Lisbon.');
// 		break;

// 	case 'designer':
// 		console.log( firstName + ' designs beautiful websites.');
// 		break;
	
// 	default:
// 		console.log( firstName + ' does something else.');
// 		break;
// }

// age = 30;
// switch ( true ) {

// 	case age < 13:
// 		console.log( firstName + ' is a boy.' );
// 		break;
		
// 	case age >= 13 && age < 20:
// 		console.log( firstName + ' is a teenager.' );
// 		break;

// 	case age >=20 && age < 30:
// 		console.log( firstName + ' is a young man.' );
// 	break;

// 	default:
// 		console.log( firstName + ' is a man.' );
// 	break;

// }

/***************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT  falsy values

// var height;
// height = '';

// if ( height || height === 0 ) {
// 	console.log( 'Variable is defined' );
// } else {
// 	console.log( 'Variable has NOT been defined' );
// }

// // Equality operators
// if ( height == '23' ) {
// 	console.log( 'The == operator does type coercion!' );
// }

/***************************
* Coding challenge 2
*/

// var johnTeamScore1 = 89;
// var johnTeamScore2 = 120;
// var johnTeamScore3 = 103;

// var markTeamScore1 = 116;
// var markTeamScore2 = 94;
// var markTeamScore3 = 123;

// var johnTeamAverageScore = ( johnTeamScore1 + johnTeamScore2 + johnTeamScore3 ) / 3;
// var markTeamAverageScore = ( markTeamScore1 + markTeamScore2 + markTeamScore3 ) / 3;

// var highestScoreTeam1 = ( johnTeamAverageScore > markTeamAverageScore ) ? 'John Team' : 'Mark Team';
// console.log( 'The winner team is ', highestScoreTeam );

/***************************
* Functions
*/

function calculateAge( birthYear ) {

	return 2018 - birthYear;

}

var ageJohn = calculateAge( 1990 );
var ageMike = calculateAge( 1948 );
var ageJane = calculateAge( 1969 );

console.log( ageJohn, ageMike, ageJane );

function yearsUntilReitrement( year, firstName ) {

	var age = calculateAge( year );
	var retirement = 65 - age;
	if ( retirement > 0 ) {
		console.log( firstName + ' retires in ' + retirement + ' years.' );
	} else {
		console.log( firstName + ' is already retired.' );
	}
	
}

yearsUntilReitrement( 1990, 'John' );
yearsUntilReitrement( 1948, 'Mike' );
yearsUntilReitrement( 1969, 'Jane' );