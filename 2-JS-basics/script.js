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

// function calculateAge( birthYear ) {
	
// 	return 2018 - birthYear;
	
// }

// var ageJohn = calculateAge( 1990 );
// var ageMike = calculateAge( 1948 );
// var ageJane = calculateAge( 1969 );

// console.log( ageJohn, ageMike, ageJane );

// function yearsUntilReitrement( year, firstName ) {
	
// 	var age = calculateAge( year );
// 	var retirement = 65 - age;
// 	if ( retirement > 0 ) {
// 		console.log( firstName + ' retires in ' + retirement + ' years.' );
// 	} else {
// 		console.log( firstName + ' is already retired.' );
// 	}
	
// }

// yearsUntilReitrement( 1990, 'John' );
// yearsUntilReitrement( 1948, 'Mike' );
// yearsUntilReitrement( 1969, 'Jane' );

/***************************
* Functions Statements and Expressions
*/

// Statements		=> Produce actions but not results
// Expressions	=> Produces actions and expects results

// Function declaration => Produces actions but not immediate results
// function whatDoYouDo ( job, firstName ) {}

// Function expression
// var whatDoYouDo = function ( job, firstName ) { 

// 	switch ( job ) {
// 		case 'teacher':
// 			return firstName + ' teaches kids how to code';
			
// 		case 'driver':
// 			return firstName + ' drives a cab in Lisbon';
				
// 		case 'designer':
// 			return firstName + ' designs beautiful websites';
				
// 		default:
// 			return firstName + ' does something else';
// 	}
	
// }

// console.log( whatDoYouDo( 'teacher', 'John' ) );
// console.log( whatDoYouDo( 'designer', 'Jane' ) );
// console.log( whatDoYouDo( 'retired', 'Mark' ) );

/***************************
* Arrays
*/

// // Initialize new array
// var names = [ 'John', 'Mark', 'Jane' ];
// var years = new Array( 1990, 1961, 1948 );

// console.log( names );
// console.log( names.length );

// // Mutate array data
// names[ 1 ] = 'Ben';
// names[ names.length ] = 'Mary';
// console.log( names );

// // Different data types
// var john = [ 'John', 'Smith', 1990, 'designer', false ];

// john.push( 'Blue' );
// john.unshift( 'Mr.' );	// Adds to the first element

// console.log( john );

// john.pop();	// Removes the last element
// john.pop();
// console.log( john );
// console.log( john.indexOf( 1990 ) );

// var isDesigner = john.indexOf( 'designer' ) === -1 ? 'John is not a designer' : 'John is a designer';
// console.log( isDesigner );


/***************************
* Coding challenge 3
*/

// var calculateTip = function( bill ) {

// 	if( bill < 50 ) {
// 		tip = 20;
// 	} else if ( bill < 200 ) {
// 		tip = 15;
// 	} else {
// 		tip = 10;
// 	}

// 	return bill * ( tip / 100 );
	
// }

// var bills = [ 124, 48, 268 ];

// var tips = [	calculateTip( bills[ 0 ] ),
// 							calculateTip( bills[ 1 ] ),
// 							calculateTip( bills[ 2 ] )
// 						];

// var paidAmounts = [	tips[ 0 ] + bills[ 0 ],
// 										tips[ 1 ] + bills[ 1 ],
// 										tips[ 2 ] + bills[ 2 ]
// 									];

// console.log( 'bills', bills );
// console.log( 'tips', tips );
// console.log( 'paidAmounts', paidAmounts );

/***************************
* Objects and properties
*/

// // Object literal
// var john = { 

// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: [ 'Jane', 'Mark', 'Bob', 'Emily' ],
// 	job: 'teacher',
// 	isMarried: false
	
// };

// console.log( john.firstName );
// console.log( john[ 'lastName' ] );
// var x = 'birthYear';

// console.log( john[ x ] );

// john.job = 'designer';
// john[ 'isMarried' ] = true;
// console.log( john );

// // New Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane[ 'lastName' ] = 'Smith';
// console.log( jane );

/***************************
* Objects and methods
*/

// var john = { 

// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: [ 'Jane', 'Mark', 'Bob', 'Emily' ],
// 	job: 'teacher',
// 	isMarried: false,
// 	calcAge: function() {
// 		this.age = 2018 - this.birthYear ;
// 	}
	
// };

// john.calcAge();
// console.log( john );

/***************************
* Coding challenge 4
*/

// var john = {

// 	fullName: 'John Smith',
// 	mass: 80,
// 	height: 1.8,
// 	calcBMI: function() {
// 		this.bmi = this.mass / ( this.height * this.height );
// 		return this.bmi;
// 	}
	
// };

// var mark = {

// 	fullName: 'Mark Wilkerson',
// 	mass: 90,
// 	height: 1.9,
// 	calcBMI: function() {
// 		this.bmi = this.mass / ( this.height * this.height );
// 		return this.bmi;
// 	}
	
// };

// var highestBMI;
// john.calcBMI();
// mark.calcBMI();

// if ( john.bmi > mark.bmi ) {
// 	highestBMI = john.fullName + ' has the highest BMI';
// } else if ( john.bmi < mark.bmi ) {
// 	highestBMI = mark.fullName + ' has the highest BMI';
// } else {
// 	highestBMI = john.fullName + ' and ' + mark.fullName + ' have the same BMI';
// }

// console.log( highestBMI );

/***************************
* Loops and iterations
*/


// for( var i = 0; i < 10; i++ ) {
// 	console.log( i );
// }

// var john = [ 'John', 'Smith', 1990, 'designer', false, 'blue' ];

// for( var i = 0; i < john.length; i++ ) {
// 	console.log( john[ i ] );
// }

// var i = 0;
// while( i < john.length ) {
// 	console.log( john[ i ] );
// 	i++;
// }

// Continue and Break statements
var john = [ 'John', 'Smith', 1990, 'designer', false, 'blue' ];

// // continue with the loop
// for( var i = 0; i < john.length; i++ ) {
// 	if( typeof john[ i ] !== 'string' ) continue;
// 	console.log( john[ i ] );
// }

// // breaks the loop
// for( var i = 0; i < john.length; i++ ) {
// 	if( typeof john[ i ] !== 'string' ) break;
// 	console.log( john[ i ] );
// }

// Looping backwards
for( var i = john.length; i >= 0; i-- ) {
	if( typeof john[ i ] !== 'string' ) continue;
	console.log( john[ i ] );
}