var firstNumber = 16;
var secondNumber = 12;
var thirdNumber = 2;
var fourthNumber = 3;

console.log(firstNumber + secondNumber);     // -> 28

console.log(firstNumber - secondNumber);    // -> 4

console.log(firstNumber * secondNumber);    // -> 192

console.log(firstNumber / secondNumber);    // -> 1.3333333333333333

console.log(firstNumber % secondNumber);    // -> 4

/*
Math.pow(base, exponent/power/index)
Exponents / Powers / Indices
 */
Math.pow(2,2);      // -> 4
Math.pow(2,3);      // -> 8
Math.pow(2,4);      // -> 16

/*
++x or x++
Increment
 */

var numberIncrementPrefix = ++firstNumber;
console.log(numberIncrementPrefix);     // -> 17 (was 16)

var numberIncrementPostfix = secondNumber++;
console.log(numberIncrementPostfix);     // -> 12 (was 12)

/*
--x or x--
Decrement
 */

var numberDecrementPrefix = --thirdNumber;
console.log(numberDecrementPrefix);     // -> 1 (was 2)

var numberDecrementPostfix = fourthNumber--;
console.log(numberDecrementPostfix);     // -> 3 (was 3)


/*
Assignments
Assignemnt                  =
Addition assignment	        +=
Subtraction assignment	    -=
Multiplication assignment   *=
Division assignment	        /=
Remainder assignment        %=
Exponentiation assignment	**=
 */

fourthNumber = fourthNumber + 2;    // was 2, now it's 4
thirdNumber += 2;                   // was 1, now it's 3
